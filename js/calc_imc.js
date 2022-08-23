var titulo = document.querySelector("h1");//querySekector faz uma busca na variavel que vem antes dele
titulo.textContent="Aparecida Nuricionista";//textContent mostra o conteudo de texto da variavel que vem antes dele na pagina e no console

//var paciente = document.querySelector("#primeiro-paciente");//faça um busca no "document"; procure o id "#primeiro-paciente"; passe toda a tag passe tada a tag a onde esse id estiver para a variavel "paciente"

var pacientes = document.querySelectorAll(".paciente");//para selecionar todas as classes usamos "querySelectorAll"

for(var i=0; i<pacientes.length; i++){//"pacientes.length" representa o numero se vetores
    var paciente = pacientes[i];//cada elemento do vetor vai passar pela variavel "paciente"

    var tdPeso = paciente.querySelector(".info-peso");//faça um busca dentro da variavel "paciente" (isso é posivel pq ela esta carregado com a tag); encontre a classe .info-peso e passe essa tag para a variavel "tdPeso" 
    var peso = tdPeso.textContent;//passe o texto da tag para a variavel "peso" 
    
    var tdAltura = paciente.querySelector(".info-altura");//faça um busca dentro da variavel "paciente" (isso é posivel pq ela esta carregado com a tag); encontre a classe .info-peso e passe essa tag para a variavel "tdAltura" 
    var altura = tdAltura.textContent;//passe o texto da tag para a variavel "altura"
    
    var tdImc = paciente.querySelector(".info-imc");//dentro da tag "paciente" encontre a classe ".info-imc"; passe o valor da tag para a variavel "tdImc"
    
    var pesoEhvalido = validaPeso(peso);
    var alturaEhvalido = validaAltura(altura);
    
    if(!pesoEhvalido){
        //pesoEhvalido = false;
        tdPeso.classList.add("paciente-invalido");
        tdImc.textContent = "Peso inválido!";
        tdImc.classList.add("paciente-invalido");
    }
    
    if(!alturaEhvalido){
        //alturaEhvalido = false;
        tdAltura.classList.add("paciente-invalido");
        tdImc.textContent = "Altura invalida!";
        tdImc.classList.add("paciente-invalido");//classList para acessarmos as classes. E usando o método add, adicionaremos a classe desejada, no caso, paciente-invalido
    }

    if(!alturaEhvalido && !pesoEhvalido){
        tdImc.textContent = "Peso e Altura estão invalidos!"
        tdAltura.classList.add("paciente-invalido");
        tdPeso.classList.add("paciente-invalido");
        tdImc.classList.add("paciente-invalido");
    }
    
    if(alturaEhvalido && pesoEhvalido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
    /*////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////*/
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc (x,y){
    var z = 0;
    z = x / (y * y);
    return z.toFixed(2);//atualize o texto da tag; na variavel "tdImc"/ muda o valor do texto na tag; "toFixed" mostra quantos numeros vc quer depois da virgula
}
