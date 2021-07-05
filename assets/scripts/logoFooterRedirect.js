const d = document,
  logoFooter = d.querySelector(".logo-footer");

export function logoFooterRedirect(url) {
  logoFooter.addEventListener("click", (e) => {
    window.open(url);
  });
}
