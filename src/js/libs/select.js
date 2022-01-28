export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.$dropSize = this.$el.querySelector('.select__dropdowm');
    this.$inputSpan = this.$el.querySelector('.select__input');
    this.$items = this.$el.querySelectorAll('.select__item');
    this.options = options;
    this.selectId = options.selectedId;
    this.#render();
    this.#setup();
  }
  #render() {
    if (!this.$inputSpan.innerHTML) {
      const { placeholder } = this.options;
      this.$inputSpan.innerHTML = `${placeholder ? placeholder : 'Текст'}`;
    }

    let value = 1;
    this.$items.forEach(item => {
      item.setAttribute('data-type', 'item');
      item.setAttribute('data-id', `${value}`);
      item.setAttribute('data-value', `${item.textContent}`);
      if (item.dataset.id == this.selectId) {
        this.$inputSpan.innerHTML = item.dataset.value;
        item.classList.add('selected');
      }
      value++;
    });
  }
  #setup() {
    this.clickHadler = this.clickHadler.bind(this);
    this.$el.addEventListener('click', this.clickHadler);
  }
  clickHadler(event) {
    const { type } = event.target.dataset;
    if (type === 'input') {
      this.toggle();
    } else if (type === 'item') {
      const id = event.target.dataset.id;
      this.select(id);
    } else if (type == 'backdrop') {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open');
  }

  get current() {
    Array.from(this.$items).find(item => {});
    return Array.from(this.$items).find(item => item.dataset.id === this.selectId);
  }

  select(id) {
    this.selectId = id;
    this.$inputSpan.textContent = this.current.dataset.value;
    this.$el.querySelectorAll(`[data-type="item"]`).forEach(el => {
      el.classList.remove('selected');
    });
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');

    this.options.onSelect ? this.options.onSelect(this.current) : null;
    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add('open');
  }

  close() {
    this.$el.classList.remove('open');
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHadler);
    this.$el.innerHTML = '';
  }
}

function getTemplate(placeholder) {}
function placeholder(placeholder) {
  return placeholder;
}
