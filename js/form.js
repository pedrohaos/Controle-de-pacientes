var botaoAdicionado = document.querySelector("#adicionar-paciente");

botaoAdicionado.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erro = validaPaciente(paciente);

    if(erro.length > 0){
        exibeMensagemDeErro(erro);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erro){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erro.forEach(function (erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-paso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erro =[];
    if(!validaPeso(paciente.peso)) erro.push("Peso é invalido");
    if(!validaAltura(paciente.altura)) erro.push("Altura é invalida");
    if(paciente.gordura.length == 0) erro.push("% de gordura não foi preenchida");
    if(paciente.nome.length == 0) erro.push("O nome não pode estar em branco");
    if(paciente.peso.length == 0) erro.push("O peso não pode estar em branco");
    if(paciente.altura.length == 0) erro.push("A altura não pode estar em branco");

    return erro;
}