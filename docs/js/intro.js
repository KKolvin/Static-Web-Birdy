// press enter to direct to gallery page
// const elem = document.getElementById("enter");
// elem.addEventListener("keypress", (event)=> {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       console.log("Press Enter to direct to gallery page");
//       window.location.href = "gallery.html";
//       document.getElementById('enter').click();
//     }
//   });

// show nav bar when scroll down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-50px";
  }
}