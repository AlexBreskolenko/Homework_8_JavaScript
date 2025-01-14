// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("Все теги прогрузились.");
});
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener("load", (e) => {
  console.log("Страница загрузилась.");
});
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.onclick = (e) => {
  let clickEll = e.target;
  if (clickEll.classList.value === "super_element") {
    console.log(
      `Класс "super_element" присутствует в элементе ${clickEll.tagName.toLowerCase()}`
    );
  } else {
    console.log(
      `Класс "super_element" отсутствует в элементе ${clickEll.tagName.toLowerCase()}`
    );
  }
};

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textEll = document.querySelector("textarea");
textEll.addEventListener("mouseover", function (e) {
  console.log("Вы навели на textarea.");
});
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const listElls = document.querySelector("ul");
listElls.addEventListener("click", function (e) {
  let linkEll = e.target;
  console.log(linkEll.textContent);
});
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
//Скорее всего из за фаз, в 5 задании фаза всплытия в 3 задании фаза захвата.
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const linkElls = document.querySelectorAll("li");
linkElls.forEach((element, index) => {
  if (index % 2 !== 0) {
    element.style = "background-color: green";
  }
});
