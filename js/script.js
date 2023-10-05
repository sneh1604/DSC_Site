document.getElementById("navbar-mobile").addEventListener("click", () => {
  if (window.innerWidth < 990)
    document.getElementById("navbar-toggler").click();
});
document.getElementById("navbar-toggler").addEventListener("click", () => {
  $('i[name="appsicon"]').removeClass("Visually-hidden");
});

$(".menu, .menu1").on("click", function () {
  $("object").attr("data", "/images/event1.pdf");
});
