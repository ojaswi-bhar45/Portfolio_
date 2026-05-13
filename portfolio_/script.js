const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    themeToggle.textContent = '✨';
  } else {
    body.classList.add('light-mode');
    themeToggle.textContent = '🌙';
  }
});

const style = document.createElement('style');
style.textContent = `
  .light-mode {
    background: radial-gradient(circle at top left, rgba(255, 180, 230, 0.24), transparent 28%),
                radial-gradient(circle at bottom right, rgba(125, 224, 255, 0.25), transparent 30%),
                linear-gradient(180deg, #fdf4ff 0%, #e9f7ff 100%);
    color: #33203d;
  }
  .light-mode .topbar,
  .light-mode .glow-card,
  .light-mode .info-card {
    background: rgba(255, 255, 255, 0.9);
    color: #33203d;
    border-color: rgba(99, 54, 123, 0.15);
  }
  .light-mode .hero-links a {
    background: rgba(255,255,255,0.98);
  }
  .light-mode .cta-button {
    background: #ff88c0;
    color: #36123c;
  }
`;
document.head.appendChild(style);
