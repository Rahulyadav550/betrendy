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

// great deal section start
let greatDeal = document.querySelector(".great-deal");
     setInterval(()=>{
                greatDeal.style.backgroundImage="url(./assets/img/bg-deal-3.jpg)";
                greatDeal.style.transition = "linear 0.9s all"
   },3000)
   setInterval(()=>{
    greatDeal.style.backgroundImage="url(./assets/img/bg-deal-2.jpg)";
    greatDeal.style.transition = "linear 0.9s all"
},6000)
// great deal section end



