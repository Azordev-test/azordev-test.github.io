/** Hamburguer Icon */
var icon = document.getElementById('nav-icon2');
var overload = document.getElementById('nav-overload');

icon.addEventListener('click', function(){
    overload.classList.toggle('Navbar-Overload-2')
    icon.classList.toggle('open');
});
/** End Hamburguer Icon */

/** Fases */
var cir1 = document.getElementById('cir-1');
var cir2 = document.getElementById('cir-2');
var cir3 = document.getElementById('cir-3');
var cir4 = document.getElementById('cir-4');

var fase1 = document.getElementById("fase-1");
var fase2 = document.getElementById("fase-2");
var fase3 = document.getElementById("fase-3");
var fase4 = document.getElementById("fase-4");

cir1.classList.add('C-On');

cir1.addEventListener('click', function(){
    cir1.classList.add('C-On');
    if(cir2.classList.contains('C-On')) cir2.classList.remove('C-On');
    if(cir3.classList.contains('C-On')) cir3.classList.remove('C-On');
    if(cir4.classList.contains('C-On')) cir4.classList.remove('C-On');
    
    fase1.classList.remove('Fase-None');
    fase1.classList.remove('Fase-Show');
    fase1.classList.add('Fase-Show');
    if(!fase2.classList.contains('Fase-None')) fase2.classList.add('Fase-None');
    if(!fase3.classList.contains('Fase-None')) fase3.classList.add('Fase-None');
    if(!fase4.classList.contains('Fase-None')) fase4.classList.add('Fase-None');
});
cir2.addEventListener('click', function(){
    cir2.classList.add('C-On');
    if(cir1.classList.contains('C-On')) cir1.classList.remove('C-On');
    if(cir3.classList.contains('C-On')) cir3.classList.remove('C-On');
    if(cir4.classList.contains('C-On')) cir4.classList.remove('C-On');

    fase2.classList.remove('Fase-None');
    fase2.classList.remove('Fase-Show');
    fase2.classList.add('Fase-Show');
    if(!fase1.classList.contains('Fase-None')) fase1.classList.add('Fase-None');
    if(!fase3.classList.contains('Fase-None')) fase3.classList.add('Fase-None');
    if(!fase4.classList.contains('Fase-None')) fase4.classList.add('Fase-None');
});
cir3.addEventListener('click', function(){
    cir3.classList.add('C-On');
    if(cir1.classList.contains('C-On')) cir1.classList.remove('C-On');
    if(cir2.classList.contains('C-On')) cir2.classList.remove('C-On');
    if(cir4.classList.contains('C-On')) cir4.classList.remove('C-On');

    fase3.classList.remove('Fase-None');
    fase3.classList.remove('Fase-Show');
    fase3.classList.add('Fase-Show');
    if(!fase1.classList.contains('Fase-None')) fase1.classList.add('Fase-None');
    if(!fase2.classList.contains('Fase-None')) fase2.classList.add('Fase-None');
    if(!fase4.classList.contains('Fase-None')) fase4.classList.add('Fase-None');
});
cir4.addEventListener('click', function(){
    cir4.classList.add('C-On');
    if(cir1.classList.contains('C-On')) cir1.classList.remove('C-On');
    if(cir2.classList.contains('C-On')) cir2.classList.remove('C-On');
    if(cir3.classList.contains('C-On')) cir3.classList.remove('C-On');

    fase4.classList.remove('Fase-None');
    fase4.classList.remove('Fase-Show');
    fase4.classList.add('Fase-Show');
    if(!fase1.classList.contains('Fase-None')) fase1.classList.add('Fase-None');
    if(!fase2.classList.contains('Fase-None')) fase2.classList.add('Fase-None');
    if(!fase3.classList.contains('Fase-None')) fase3.classList.add('Fase-None');
});
/** End Fases */
