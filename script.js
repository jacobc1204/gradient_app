const gradient = document.querySelector('.gradient');
const primary = document.querySelector('#primary');
const degrees = document.querySelector('#degrees');
const complimentary = document.querySelector('#complimentary');
const modal = document.querySelector('#modal');
const pastel = document.querySelector('#pastel');
const normal = document.querySelector('#normal');
let degs = 25;
let light = 50;

function changeGradient(e) {
  if (degs >= 100) { // stop the degrees value from getting too high
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
  primary.innerHTML = `hsl(${X}, 100%, ${light}%)`;
  gradient.style.setProperty('--primary', `hsl(${X}, 100%, ${light}%)`);
  degrees.innerHTML = `0.${degs}turn`;
  gradient.style.setProperty('--degs', `0.${degs}turn`);
  complimentary.innerHTML = `hsl(${Y}, 100%, ${light}%)`;
  gradient.style.setProperty('--complimentary', `hsl(${Y}, 100%, ${light}%)`);
  degs++;
}

gradient.addEventListener('mousemove', changeGradient);
gradient.addEventListener('touchstart', changeGradient); // mobile movements
gradient.addEventListener('touchmove', changeGradient);
modal.addEventListener('click', () => { modal.style.display = 'none'; });
pastel.addEventListener('click', () => { light = 80; }); // switch between pastel and normal
normal.addEventListener('click', () => { light = 50; });
