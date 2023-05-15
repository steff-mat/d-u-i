export default function toggleNav() {
  const nav = document.querySelector('nav');
  const toggleButton = document.getElementById('toggle_nav_button');

  toggleButton.addEventListener('click', () => {
    if (nav.style.top === '0px') {
      nav.style.top = '-20rem';
      toggleButton.innerText = 'Open';
    } else {
      nav.style.top = '0px';
      toggleButton.innerText = 'Close';
    }
  });
}
