const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        header.classList.add("change");
    }
    else {
        header.classList.remove("change");
    }
})

const headertxtlogo = document.querySelector("header .logo");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        headertxtlogo.classList.replace("logo","changetxtlogo");
    }
    else {
        headertxtlogo.classList.replace("changetxtlogo","logo");
    }
})

const headertxtnav = document.querySelectorAll("div.links a");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        headertxtnav.classList.replace("a","changetxtnav");
    }
    else {
        headertxtnav.classList.replace("changetxtnav","a");
    }
})

const mmo_img = document.getElementById('mmo_img');
const inf_img = document.getElementById('inf_img');

const cargarImg = (entradas, observ) => {
    //console.log(entradas),
    //console.log(observ)
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}

const observ = new IntersectionObserver(cargarImg, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0


});

observ.observe(mmo_img);
observ.observe(inf_img);

