window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})
//POP-UP DE DETALHES DO PRODUTO
            function abrirPopup() {
                document.getElementById("popupTelefone").style.display = "flex";
            }

            function fecharPopup() {
                document.getElementById("popupTelefone").style.display = "none";
            }
            function abrirPopup1() {
                document.getElementById("popupEmail").style.display = "flex";
            }

            function fecharPopup1() {
                document.getElementById("popupEmail").style.display = "none";
            }