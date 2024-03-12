document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle Button
  const openButtonMenuToggle = document.querySelector(".menu-button-toggle");
  //   close menu button
  const closeButtonMenuToggle = document.querySelector(".close-button-toggle");
  // Get references to the button and the element to toggle
  var myElement = document.querySelector(".menu-geser");
  // html element
  const htmlElement = document.querySelector("html");
  //   tag ul menu
  const ulMenus = document.querySelector(".shop-menu");
  //   tag li hover
  const liMenus = document.querySelector(".shop-menu-header");

  //   collapse element
  const collapse1 = document.querySelector("#collapseExample1");
  const collapse2 = document.querySelector("#collapseExample2");

  if (window.innerWidth <= 767) {
    collapse1.classList.add("show");
    collapse2.classList.add("show");
  } else {
    collapse1.classList.add("show");
    collapse2.classList.add("show");
    htmlElement.classList.remove("scroll-locked");
    // Tambahkan event listener untuk menangani mouseenter
    liMenus.addEventListener("mouseenter", function () {
      $(".shop-menu").collapse("show");
      ulMenus.classList.add("menus-hover");
    });

    // Tambahkan event listener untuk menangani mouseleave
    liMenus.addEventListener("mouseleave", function () {
      // ulMenus.classList.remove("menus-hover");
      $(".shop-menu").collapse("hide");
    });
  }

  // Add a click event listener to the button
  openButtonMenuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    myElement.style.transform = "translate(0)";
    htmlElement.classList.add("scroll-locked");
  });
  closeButtonMenuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    myElement.style.transform = "translate(-100%)";
    htmlElement.classList.remove("scroll-locked");
  });
});

// // Event listener untuk mereset CSS ketika Developer Tools ditutup
// document.addEventListener("visibilitychange", function () {
//   const htmlElement = document.querySelector("html");
//   if (!document.hidden) {
//     // Developer Tools terbuka
//     console.log("Developer Tools terbuka");
//     // Lakukan sesuatu jika diperlukan saat Developer Tools terbuka
//   } else {
//     // Developer Tools ditutup
//     console.log("Developer Tools ditutup");
//     // Mereset CSS saat Developer Tools ditutup
//     htmlElement.classList.remove("scroll-locked");
//   }
// });
