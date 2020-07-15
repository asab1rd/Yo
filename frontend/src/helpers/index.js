/**
 *
 * @param {Sting} element className of the element(s)
 * @param {Sting} className className to remove
 */
export const classRemove = (element, className) => {
  const elements = document.getElementsByClassName(element);
  Array.from(elements).forEach((element) => {
    element.classList.remove(className); //Doest work in IE
  });
};
