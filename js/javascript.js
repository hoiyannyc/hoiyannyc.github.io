//accordions
const accordionItems = document.querySelectorAll('.main-accordion-items');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const arrow = item.querySelector('.arrow');

  header.addEventListener('click', () => {
    item.classList.toggle('active');
    content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 1 + 'px' : '0px';
    arrow.classList.toggle('active'); 
  });
});

//footer
const d = new Date();
document.getElementById('date').innerHTML = d.getFullYear();