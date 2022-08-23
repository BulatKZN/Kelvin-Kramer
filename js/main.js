const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
        navBtnImg.src = "/nav-close.4408bcb1.svg";
    } else {
        navBtnImg.src = "/nav-open.de2ec138.svg";
    }
};

AOS.init({
    disable: "phone"
    // once: true
});