const inputCheckDarkLight = document.querySelector("#modo-noturno");
const element = document.querySelector("body");
const nameTheme = document.querySelector("#text-btn-theme");

inputCheckDarkLight.addEventListener("click", () => {
  const modo = inputCheckDarkLight.checked ? "dark" : "light";
  const name = inputCheckDarkLight.checked ? "Modo Claro" : "Modo Noturno";

  element.setAttribute("data-bs-theme", modo);
  nameTheme.textContent = name;
});
