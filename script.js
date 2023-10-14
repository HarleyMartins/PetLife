const elementoDuvidas = document.querySelectorAll(".duvidas__item")
elementoDuvidas.forEach(function (duvida__item) {
  duvida__item.addEventListener("click", function () {
    duvida__item.classList.toggle("ativa")
  })
})

const buttonMenu = document
  .getElementById("button--mobile")
  .addEventListener("click", function () {
    const nav = document.getElementById("header__nav--mobile")
    nav.classList.toggle("ativa")
  })

const buttonExit = document
  .getElementById("exit")
  .addEventListener("click", function () {
    const nav = document.getElementById("header__nav--mobile")
    nav.classList.toggle("ativa")
  })
