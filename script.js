

// Animate progress bars on scroll
const skills = document.querySelector('.skills');
const progressBar = document.querySelectorAll('.progress');

function animateProgressBar() {
  for (let i = 0; i < progressBar.length; i++) {
    let currentProgress = 0;
    let interval = setInterval(() => {
      if (currentProgress >= parseInt(progressBar[i].style.width)) {
        clearInterval(interval);
      } else {
        currentProgress += 1;
        progressBar[i].style.width = currentProgress + '%';
      }
    }, 10);
  }
}

window.addEventListener('scroll', () => {
  if (skills.getBoundingClientRect().top <= window.innerHeight - 50) {
    animateProgressBar();
    window.removeEventListener('scroll', animateProgressBar);
  }
});
