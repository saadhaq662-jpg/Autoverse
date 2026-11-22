document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--x",e.clientX+"px");

document.body.style.setProperty("--y",e.clientY+"px");

});
const premiumcards=document.querySelectorAll(".card");

premiumcards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--mx",x+"px");
card.style.setProperty("--my",y+"px");

const rotateY=((x-rect.width/2)/18);

const rotateX=((rect.height/2-y)/18);

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});
const reveal = document.querySelectorAll(
".service-card,.review-card,.stat-box,.features div,.gallery-grid img"
);

const revealobserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards",
easing:"ease"

});

}

});

},{threshold:.2});

reveal.forEach(el=>revealobserver.observe(el));
/*=============================
        PREMIUM CURSOR
=============================*/

const cursor=document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.card,input,textarea").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-grow");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-grow");

});

});

}

document.querySelectorAll("a,button,.card,input,textarea").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-grow");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-grow");

});

});


/*=============================
        HERO PARALLAX
=============================*/

const hero=document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

document.querySelector(".hero-content").style.transform=
`translate(${x}px,${y}px)`;

});

hero.addEventListener("mouseleave",()=>{

document.querySelector(".hero-content").style.transform=
"translate(0,0)";

});


/*=============================
        MAGNETIC BUTTON
=============================*/

document.querySelectorAll(".btn,.card button,.test-drive button,.contact-form button").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*.18}px,${y*.18}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});
gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero-content h1",{
    y:120,
    opacity:0,
    duration:1.2,
    ease:"power4.out"
});

gsap.from(".hero-content p",{
    y:80,
    opacity:0,
    delay:.3,
    duration:1,
    ease:"power4.out"
});

gsap.from("#searchCar",{
    scale:.8,
    opacity:0,
    delay:.6,
    duration:.8
});

gsap.from(".btn",{
    scale:.5,
    opacity:0,
    delay:.8,
    duration:.8,
    ease:"back.out(2)"
});


// BRANDS

gsap.fromTo(
".brand-container h3",

{
    opacity:0,
    y:60
},

{
    opacity:1,
    y:0,
    stagger:0.15,
    duration:1,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".brands",
        start:"top 80%",
        toggleActions:"play none none reverse"
    }

});


// CARDS

gsap.from(".card",{

scrollTrigger:{

trigger:".cars",

start:"top 70%"

},

y:120,

opacity:0,

stagger:.25,

duration:1

});


// STATS

gsap.from(".stat-box",{

scrollTrigger:{

trigger:".stats",

start:"top 75%"

},

scale:.5,

opacity:0,

stagger:.2,

duration:.8

});


// SERVICES

gsap.from(".service-card",{

scrollTrigger:{

trigger:"#services",

start:"top 70%"

},

x:-120,

opacity:0,

stagger:.2,

duration:1

});


// REVIEWS

gsap.from(".review-card",{

scrollTrigger:{

trigger:".reviews",

start:"top 70%"

},

rotation:8,

y:100,

opacity:0,

stagger:.2,

duration:1

});


// WHY US

gsap.from(".features div",{

scrollTrigger:{

trigger:".why-us",

start:"top 70%"

},

scale:.6,

opacity:0,

stagger:.15,

duration:1

});


// GALLERY

gsap.from(".gallery-grid img",{

scrollTrigger:{

trigger:".gallery",

start:"top 70%"

},

scale:.7,

opacity:0,

stagger:.08,

duration:.8

});


// TEST DRIVE

gsap.from(".test-drive form",{

scrollTrigger:{

trigger:".test-drive",

start:"top 70%"

},

y:120,

opacity:0,

duration:1

});


// CONTACT

gsap.from(".contact-container",{

scrollTrigger:{

trigger:"#contact",

start:"top 70%"

},

y:100,

opacity:0,

duration:1

});


// FOOTER

gsap.from(".footer-container",{

scrollTrigger:{

trigger:".footer",

start:"top 90%"

},

y:80,

opacity:0,

duration:1

});