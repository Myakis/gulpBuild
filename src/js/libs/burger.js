export function burgerMenu() {
  const burger = document.querySelector('.menu__icon');
  burger.addEventListener('click', () => {
    document.documentElement.classList.toggle('memu-open');
  });
}
