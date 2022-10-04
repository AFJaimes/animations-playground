const ActivateTransitions = () => {
  const elements = document.getElementsByClassName("transformDiv");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('moveDiv');
  }
};
const DeactivateTransitions = () => {
  const elements = document.getElementsByClassName("transformDiv");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('moveDiv');
  }
};
