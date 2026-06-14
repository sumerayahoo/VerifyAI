function replay() {
  const sweep    = document.getElementById('sweep');
  const wordmark = document.getElementById('wordmark');

  // Strip animations
  sweep.style.animation    = 'none';
  wordmark.style.animation = 'none';

  // Force reflow so the browser registers the reset
  void sweep.offsetWidth;
  void wordmark.offsetWidth;

  // Re-apply animations
  sweep.style.animation    = 'sweepDown 1.1s cubic-bezier(0.77, 0, 0.18, 1) 0.3s forwards';
  wordmark.style.animation = 'slideIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.45s forwards';
}
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'verify.html'; // 👈 your actual website file
    }, 500);
  }, 2600);
});

function replay() {
  const sweep    = document.getElementById('sweep');
  const wordmark = document.getElementById('wordmark');

  sweep.style.animation    = 'none';
  wordmark.style.animation = 'none';

  void sweep.offsetWidth;
  void wordmark.offsetWidth;

  sweep.style.animation    = 'sweepDown 1.1s cubic-bezier(0.77, 0, 0.18, 1) 0.3s forwards';
  wordmark.style.animation = 'slideIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.45s forwards';
}