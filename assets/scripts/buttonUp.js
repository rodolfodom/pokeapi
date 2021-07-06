const d = document;

export default function buttonUp() {
  const buttonUp = d.getElementById("button-up");
  buttonUp.addEventListener("click", (e) => {
    location.hash = "";
    location.hash = "pokemon";
  });

  d.addEventListener("scroll", (e) => {
    if (window.scrollY < 1000) {
      buttonUp.style.display = "none";
    } else {
      buttonUp.style.display = "block";
    }
  });
}
