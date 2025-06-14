var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    // Captura os valores dos campos
    var nomeCompleto = document.querySelector("#nomeCompleto").value.trim();
    var email = document.querySelector('input[type="email"]').value.trim();
    var telefone = document.querySelector('input[type="tel"]').value.trim();
    var dataNascimento = document.querySelector('input[type="date"]').value.trim();
    var genero = document.querySelector('input[name="genero"]:checked');
    var motivoContato = document.querySelector('select[title="MotivoContato"]').value;
    var assunto = document.querySelector('select[title="Assunto"]').value;
    var descricao = document.querySelector('textarea').value.trim();

    // Verifica se algum campo está vazio ou não selecionado
    if (
        nomeCompleto === '' ||
        email === '' ||
        telefone === '' ||
        dataNascimento === '' ||
        !genero ||
        motivoContato === 'Escolha uma opção' ||
        assunto === 'Escolha uma opção' ||
        descricao === ''
    ) {
        alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
        return;
    }

    // Todos os campos preenchidos: exibe mensagem e oculta formulário
    var msgRetorno = nomeCompleto + ", Nós da Biblioconecta agradecemos o seu contato!<br><br>Vamos avaliar a sua solicitação e retornaremos em breve.";

    document.getElementById('formRetorno').style.display = "block";
    document.getElementById('textoRetorno').innerHTML = msgRetorno;

    document.getElementById('formulario').style.display = "none";

    const protocolo = Math.floor(100000 + Math.random() * 900000);

    setTimeout(() => {
    const yOffset = -120; // Compensação da altura do header fixo
    const elemento = document.getElementById('formRetorno');
    const y = elemento.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}, 100);
});
