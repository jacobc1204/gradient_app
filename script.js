const gradient = document.querySelector('body');
let degs = 36;
const primary = document.querySelector('#primary');
const degrees = document.querySelector('#degrees');
const complimentary = document.querySelector('#complimentary');
const modal = document.querySelector('#modal');

function changeGradient(e) {
  if (degs >= 10000) { // stop the degrees value from getting too high
    degs = 25;
  }
  // define X and Y
  let X;
  let Y;
  if (e.touches) { // check for mobile value
    X = Math.floor(e.touches[0].clientX);
    Y = Math.floor(e.touches[0].clientY);
  } else {
    X = e.x; // fall back to desktop browser values
    Y = e.y;
  }
  // do all the things
  primary.innerHTML = `hsl(${X}, 100%, 49%)`;
  gradient.style.setProperty('--primary', `hsl(${X}, 100%, 49%)`);
  degrees.innerHTML = `0.${degs}turn`;
  gradient.style.setProperty('--degs', `0.${degs}turn`);
  complimentary.innerHTML = `hsl(${Y}, 100%, 49%)`;
  gradient.style.setProperty('--complimentary', `hsl(${Y}, 100%, 49%)`);
  degs += 36;
}

window.addEventListener('mousemove', changeGradient);
window.addEventListener('touchstart', changeGradient);
window.addEventListener('touchmove', changeGradient);
modal.addEventListener('click', () => { modal.style.display = 'none'; });
