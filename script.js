window.addEventListener("load", () => {
    console.log("🚗 AutoVerse Loaded Successfully");
});

// EXPLORE BUTTON

const exploreBtn = document.querySelector(".btn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", function () {

        const carsSection = document.getElementById("cars");

        if (carsSection) {

            carsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

        setTimeout(() => {

            const searchBar = document.getElementById("searchCar");

            if (searchBar) {
                searchBar.focus();
            }

        }, 500);

    });

}

// NAVBAR ACTIVE + SMOOTH SCROLL

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});

// // CARD HOVER

// const cards = document.querySelectorAll(".card");

// cards.forEach(card => {

//     card.addEventListener("mouseenter", () => {
//         card.style.transform = "translateY(-10px)";
//     });

//     card.addEventListener("mouseleave", () => {
//         card.style.transform = "translateY(0)";
//     });

// });

// FOOTER YEAR

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} AutoVerse. All Rights Reserved.`;

}

// SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, #services, #contact").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

// BACK TO TOP BUTTON

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// HEADER BG CHANGE

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (header) {

        if (window.scrollY > 50) {
            header.style.background = "#000";
        } else {
            header.style.background = "rgba(0,0,0,0.7)";
        }

    }

});

// WELCOME MESSAGE

setTimeout(() => {

    console.log("🔥 Welcome to AutoVerse Premium Edition");

}, 1500);

// SERVICES ANIMATION

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// CONTACT FORM

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            this.querySelector('input[type="text"]').value;

        alert(`Thank you ${name}! Your message has been sent successfully 🚗`);

        this.reset();

    });

}
// MOBILE MENU

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    if(menu){
        menu.classList.toggle("show");
    }

}


// HEADER SCROLL EFFECT

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if(header){

        if(window.scrollY > 50){
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }

    }

});


// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section[id]");
const navLinks2 = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks2.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


// SEARCH FEATURE

const searchInput = document.getElementById("searchCar");

if(searchInput){

    searchInput.addEventListener("input", function(){

        let value = this.value.toLowerCase();

        document.querySelectorAll(".cars .card").forEach(card => {

            let title =
            card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(value) || value === ""){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}


// TEST DRIVE FORM

const testDriveForm =
document.querySelector(".test-drive form");

if(testDriveForm){

    testDriveForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("🚗 Test Drive Booked Successfully!");

        testDriveForm.reset();

    });

}


// VIEW DETAILS FUNCTION

function toggleDetails(id){

    const selected = document.getElementById(id);

    if(!selected) return;

    if(selected.style.display === "block"){

        selected.style.display = "none";

    }else{

        selected.style.display = "block";

        setTimeout(() => {

            const y =
                selected.getBoundingClientRect().top +
                window.pageYOffset - 120;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

        }, 100);

    }

}

// WHATSAPP BUTTON EFFECT

const whatsappBtn =
document.querySelector(".whatsapp-btn");

if(whatsappBtn){

    whatsappBtn.addEventListener("mouseenter", () => {

        whatsappBtn.style.transform = "scale(1.1)";

    });

    whatsappBtn.addEventListener("mouseleave", () => {

        whatsappBtn.style.transform = "scale(1)";

    });

}



const toggle=document.getElementById("themeToggle");
const text=document.getElementById("themeText");

// Load Saved Theme

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light-theme");

    toggle.checked=true;

    text.textContent="Light Mode";

}else{

    text.textContent="Dark Mode";

}

// Toggle Theme

toggle.addEventListener("change",()=>{

    if(toggle.checked){

        document.body.classList.add("light-theme");

        localStorage.setItem("theme","light");

        text.textContent="Light Mode";

    }else{

        document.body.classList.remove("light-theme");

        localStorage.setItem("theme","dark");

        text.textContent="Dark Mode";

    }

});



