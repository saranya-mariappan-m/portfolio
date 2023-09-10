let toggleNavigation = document.getElementById("navbarBtn");

toggleNavigation.addEventListener("click", function () {
    let navBarSection = document.getElementById("navbarNav");
    navBarSection.classList.toggle('collapse');
});