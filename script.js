const text = document.querySelector(".coming-soon");

let visible = true;

setInterval(() => {
  text.style.opacity = visible ? "0.4" : "1";
  visible = !visible;
}, 800);
