let openBtn = document.querySelector(".bi-gear");
let closeBtn = document.querySelector(".bi-x");

let headerMenu = document.querySelector(".header__menu");

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    headerMenu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    headerMenu.classList.toggle("hidden");
});

function open_sidebar() {
    document.getElementById("sidebarMenu").style.display = "block";
  }
  
  function close_sidebar() {
    document.getElementById("sidebarMenu").style.display = "none";
  }

// window.onscroll = function() {stickyHeader()};

// var header = document.getElementById("hero");

// var sticky = header.offsetTop;

// function stickyHeader() {
//   if (window.scrollY > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
