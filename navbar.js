const navbarl = document.querySelector(".navbar");

const Containerl = document.querySelector(".body");

console.log(navbarl.offsetHeight);

console.log(Containerl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    Containerl.offsetTop - navbarl.offsetHeight - 50
  ) {
    navbarl.classList.add("active");
  } else {
    navbarl.classList.remove("active");
  }
});