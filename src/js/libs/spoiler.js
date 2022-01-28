export function spoiler() {
  const spoilers = document.querySelectorAll('[data-spoiler');
  if (spoilers) {
    spoilers.forEach(spoiler => {
      const spoilerHead = spoiler.querySelector('.spoiler__title');
      const spoilerBody = spoiler.querySelector('.spoiler__content');
      const spoilerBodys = document.querySelectorAll('.spoiler__content');
      const dataValue = spoiler.dataset.spoiler;
      if (dataValue == '') {
        spoilerHead.addEventListener('click', () => {
          if (spoiler.classList.contains('spoiler_active')) {
            spoilers.forEach(accordion => {
              accordion.classList.remove('spoiler_active');
              spoilerBody.style.height = null;
            });
          } else {
            spoilers.forEach(accordion => {
              accordion.classList.remove('spoiler_active');
              spoilerBody.style.height = null;
            });
            spoilerBodys.forEach(body => {
              body.style.height = null;
            });
            spoiler.classList.add('spoiler_active');
            spoilerBody.style.height = spoilerBody.scrollHeight + 'px';
          }
        });
      } else {
        window.addEventListener('resize', () => {
          if (window.innerWidth < dataValue) {
            spoilerHead.addEventListener('click', () => {
              if (spoiler.classList.contains('spoiler_active')) {
                spoilers.forEach(accordion => {
                  accordion.classList.remove('spoiler_active');
                  spoilerBody.style.height = null;
                });
              } else {
                spoilers.forEach(accordion => {
                  accordion.classList.remove('spoiler_active');
                  spoilerBody.style.height = null;
                });
                spoilerBodys.forEach(body => {
                  body.style.height = null;
                });
                spoiler.classList.add('spoiler_active');
                spoilerBody.style.height = spoilerBody.scrollHeight + 'px';
              }
            });
          }
        });
      }
    });
  }
}
