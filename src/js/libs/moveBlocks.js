export function moveBlock() {
  const blocks = document.querySelectorAll('[data-da]');
  if (blocks) {
    blocks.forEach(block => {
      const valuesBlock = block.dataset.da.split(',');
      const [selector, mediaWidth, method] = valuesBlock;

      const nextEl = block.nextElementSibling; //Определяем элемент перед которым стоял наш блок
      const newBlock = document.querySelector(selector); //Определяем блок куда вставим элемент

      window.addEventListener('resize', function moveBlock() {
        if (window.innerWidth <= mediaWidth) {
          //Если метод выбран, то будет указано, куда (в начало или конец) будет вставлен элемент
          //По умолчанию в конец элемента
          switch (method) {
            case 'first':
              newBlock.prepend(block);
              break;
            default:
              newBlock.append(block);
          }
        }
        if (window.innerWidth > mediaWidth) {
          nextEl.before(block);
        }
      });
    });
  }
}
