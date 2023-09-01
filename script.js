// Get the button
let btn = document.querySelector(".scrollTop");

// Scroll to top on click
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
