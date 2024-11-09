// hide and reappear nav bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
    document.querySelector("nav").style.zIndex = "100";
  } else {
    document.querySelector("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


// scroll reveal header
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    // markers: true,
    // onEnter: function () {
    //   gsap.fromTo(
    //     elem,
    //     { y: 100, autoAlpha: 0 },
    //     {
    //       duration: 1.25,
    //       y: 0,
    //       autoAlpha: 1,
    //       ease: "back",
    //       overwrite: "auto"
    //     }
    //   );
    // },
    // onLeave: function () {
    //   gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    // },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
