var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    var nomeCompleto = document.querySelector("#nomeCompleto").value.trim();
    var descricao = document.querySelector('textarea').value.trim();

    if (nomeCompleto === '' || descricao === '') {
        alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
        return;
    }

    var msgRetorno = nomeCompleto + ", nós da BiblioConecta agradecemos o seu feedback! Vamos analisar e entraremos em contato se necessário.";

    document.getElementById('formRetorno').style.display = "block";
    document.getElementById('textoRetorno').innerHTML = msgRetorno;
    document.getElementById('formulario').style.display = "none";

    setTimeout(() => {
        const yOffset = -120;
        const elemento = document.getElementById('formRetorno');
        const y = elemento.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
});
    var stars = document.querySelectorAll('.star-icon');

    document.addEventListener('click',function(e){
        var classStar = e.target.classList;
        if(!classStar.contains('ativo')){
            stars.forEach(function(star){
                star.classList.remove('ativo');
            });
            classStar.add('ativo');
            console.log(e.target.getAttribute('data-avaliacao'));
        }
    });