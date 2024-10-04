let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let setaCima = document.getElementById('btn-topo');

let popup = document.getElementById('popupProjNapne');
let fecharPopup = document.getElementById('fechar-popup');
let projeto = document.getElementById('NAPNE');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
});

fecharPopup.addEventListener('click', ()=>{
    popup.style.display = "none";
})

projeto.addEventListener('click', ()=>{
    popup.style.display = "flex";
});

BtnSetaCima = () => {
    if(window.scrollY >= 300){
        setaCima.classList.add('show');
    }
    else{
        setaCima.classList.remove('show');
    }
};

window.addEventListener('scroll', function(){
    BtnSetaCima();
});