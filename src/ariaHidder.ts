let globalElement = null;
let domNodes = [];

// document.querySelectorAll('#storybook-preview-iframe')[0]?.contentWindow.document.body.querySelectorAll('a')

export const setElement = (element: string = 'body > *') => {
  // @ts-ignore
  const doc = document.querySelectorAll('#storybook-preview-iframe')[0]?.contentDocument || document;
  globalElement = doc.querySelectorAll(element) || globalElement;
  return globalElement;
};

export const hideElems = (portalNode?) => {
  const doc = globalElement || setElement();
  Array.prototype.forEach.call(doc, (el) => {
    if (portalNode ? el === portalNode : el.classList.contains('keyboard-trap--active')) {
      return;
    }
    const attr = el.getAttribute('aria-hidden');
    // already hidden elms gets skipped
    if (attr == null || attr == 'false') {
      domNodes.push({el, attr});
      el.setAttribute('aria-hidden', 'true');
    }
  });
};

export const resetElems = () => {
  domNodes.forEach(({el, attr}) => {
    if (attr) {
      el.setAttribute('aria-hidden', attr);
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
  domNodes = [];
};

export const clean = () => {
  resetElems();
  globalElement = null;
};
