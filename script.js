const intro=document.querySelector(".intro");
const video = intro.querySelector("img")
const text=intro.querySelector("h1")
//End section
const section=document.querySelector("section")
const end = section.querySelector("h1")

//Scrool magic
const controller=new ScrollMagic.Controller();
let scence=new ScrollMagic.Scene({
    duration:10000,
    trigger:intro,
    triggerHook:0,
}).setPin(intro)
.addTo(controller);
//Video animation
let accelamout=0.1;
let scrollpos=0;
let delay=0;
let last;
let i;
scence.on('update', e=>{
    scrollpos=e.scrollPos/20;
    console.log(Math.round(scrollpos))
    if(Math.round(scrollpos)>=497){
        video.src=`images/497.jpg`
    }
    else{
        video.src=`images/${Math.round(scrollpos)}.jpg`
    }
})
