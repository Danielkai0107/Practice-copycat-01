let list = document.querySelector('.menu__btn');
let menu = document.querySelector('.navbar_ph--1');

list.addEventListener('click', () => {
  list.classList.toggle('active');
  menu.classList.toggle('b');
});

let a1 = document.querySelector('.ph-design');
a1.addEventListener('click', () => {
  list.classList.toggle('active');
  menu.classList.toggle('b');
  console.log(a1);
});

let a2 = document.querySelector('.ph-feature');
a2.addEventListener('click', () => {
  list.classList.toggle('active');
  menu.classList.toggle('b');
  console.log(a2);
});

let a3 = document.querySelector('.ph-spec');
a3.addEventListener('click', () => {
  list.classList.toggle('active');
  menu.classList.toggle('b');
  console.log(a3);
});

let a4 = document.querySelector('.ph-access');
a4.addEventListener('click', () => {
  list.classList.toggle('active');
  menu.classList.toggle('b');
  console.log(a4);
});
