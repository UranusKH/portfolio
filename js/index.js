window.addEventListener('scroll',function () {
  let header = document.querySelector('nav')
  let windowPosition = window.scrollY>0;
  header.classList.toggle('scrolling-active', windowPosition);

})

// ---------------------------------------------------------------------->

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__content");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// ---------------------------------------------------------------------->

const navLink = document.querySelectorAll(".nav__text");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// ---------------------------------------------------------------------->

(function () {
  "use strict";
  let items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();



// ----------------------------slideShow(content--fourth)-------------



// -------------------function(scroll top)--------

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFirstpage() {

  let start = document.getElementById('firstPage').offsetTop;
  let final = start - 90
  window.scroll({ top: final })
  console.log(start);
}

function scrollSecondpage(){
  let start = document.getElementById('secondPage').offsetTop;
  let final = start - 90
  window.scroll({top:final})
}

function scrollContact(){
  let start = document.getElementById('fifthPage').offsetTop;
  let final = start - 90
  window.scroll({top:final})
}




// const scrollbtn = document.querySelectorAll(".nav__list")
// const content = document.querySelectorAll(".content")
// const showme = document.querySelector(".text-showme")


// let firstTop = content[0].offsetTop;
// let secondTop = content[1].offsetTop -50;
// let thirdTop = content[2].offsetTop -50;

// console.log(firstTop)
// console.log(secondTop)
// console.log(thirdTop)
// console.log(scrollbtn)

// showme.onclick = function(){
//   window.scroll({top:firstTop})
// }
// scrollbtn[0].onclick = function(){
//   window.scroll({top:firstTop})
// }
// scrollbtn[1].onclick = function(){
//   window.scroll({top:secondTop})
// }
// scrollbtn[2].onclick = function(){
//   window.scroll({top:thirdTop})
// }