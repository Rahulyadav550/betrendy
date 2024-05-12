// <!--  Hero sectionInitialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Hero section initialize swiper end
// Time function start
var currenttime = document.querySelector("#currenttime");
function displayclock(){
  var date = new Date();
  var datetime = date.toLocaleTimeString();
  currenttime.innerHTML = "42 days  " + datetime;
}
setInterval(displayclock,1000);
// Time function end



