// press enter to direct to gallery page
const elem = document.getElementById("enter");
elem.addEventListener("keypress", (event)=> {
    if (event.key === "Enter") {
      event.preventDefault();
	 // your code to Run
      console.log("Press Enter to direct to gallery page");
    }
  });


// hide and reappear nav bar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("nav").style.top = "-50px";
//   } else {
//     document.querySelector("nav").style.top = "0";
//   }
//   prevScrollpos = currentScrollPos;
// }


// show nav bar when scroll down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-50px";
  }
}