var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-210px";
  }

  prevScrollpos = currentScrollPos;
}

document.getElementById('navbar-mobile').addEventListener("click", () => {
  if (window.innerWidth < 990)
    document.getElementById('navbar-toggler').click();
})
document.getElementById("navbar-toggler").addEventListener('click', () => {
    $('i[name="appsicon"]').removeClass('Visually-hidden');

  });



  $(".menu, .menu1").on("click", function(){
    $("object").attr('data', '/images/event1.pdf');
 });
