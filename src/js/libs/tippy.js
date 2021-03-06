import tippy from 'tippy.js';
export function typpes() {
  const tips = document.querySelectorAll('[data-type-content]');
  if (tips) {
    tips.forEach(tip => {
      tippy(tip, {
        content: tip.dataset.typeContent,
      });
    });
  }
}
