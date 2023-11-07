//main.js file

const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
  const accordionButton = accordion.querySelector('.accordion-button')
  const accText = accordion.querySelector('.accordion-text')
  const icon = accordion.querySelector('.icon')

  accordionButton.addEventListener('click', () => {
    closeOpenAccordion()
    accordion.classList.toggle('opened')
    if (accordion.classList.contains('opened')) {
      accText.style.height = accText.scrollHeight + 'px'
      accText.style.height = '50px'
      icon.classList.add('rotate180')
    } else {
      accText.style.height = '0px'
      icon.classList.remove('rotate180')
    }
  })
})
const closeOpenAccordion = () => {
  accordions.forEach((accordion) => {
    if (accordion.classList.contains('opened')) {
      const accText = accordion.querySelector('.accordion-text')
      const icon = accordion.querySelector('.icon')
      accText.style.height = '0px'
      icon.classList.remove('rotate180')
    }
  })
}
