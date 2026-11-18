// Colorful cover art for each project card, drawn from the site's colors
function drawArt() {
  const cs = getComputedStyle(document.documentElement);
  const c = n => cs.getPropertyValue('--' + n).trim();
  const pal = [c('deep'), c('hot'), c('pop'), c('bright'), c('fresh')];
  const line = c('line');
  document.querySelectorAll('canvas[data-art]').forEach(cv => {
    const i = +cv.dataset.art;
    const r = cv.getBoundingClientRect();
    if (!r.width) return;
    const dpr = window.devicePixelRatio || 1;
    cv.width = r.width * dpr; cv.height = r.height * dpr;
    const x = cv.getContext('2d');
    x.scale(dpr, dpr);
    const w = r.width, h = r.height;
    x.fillStyle = pal[(i + 3) % 5]; x.fillRect(0, 0, w, h);
    x.lineWidth = 2; x.strokeStyle = line;
    if (i % 3 === 0) {
      for (let k = 0; k < 4; k++) {
        x.fillStyle = pal[k % 5];
        x.beginPath(); x.arc(w * (0.2 + k * 0.2), h * 0.55, h * 0.3, 0, Math.PI * 2); x.fill(); x.stroke();
      }
    } else if (i % 3 === 1) {
      const s = h / 4;
      for (let row = 0; row < 4; row++) for (let col = 0; col < Math.ceil(w / s); col++) {
        x.fillStyle = pal[(row + col) % 5];
        x.beginPath();
        if ((row + col) % 2) x.arc(col * s + s / 2, row * s + s / 2, s * 0.38, 0, Math.PI * 2);
        else x.rect(col * s + s * 0.12, row * s + s * 0.12, s * 0.76, s * 0.76);
        x.fill(); x.stroke();
      }
    } else {
      for (let k = 0; k < 6; k++) {
        x.fillStyle = pal[k % 5];
        x.beginPath();
        x.moveTo(0, h * (0.15 + k * 0.15));
        for (let px = 0; px <= w; px += 8) x.lineTo(px, h * (0.15 + k * 0.15) + Math.sin(px / 30 + k) * 12);
        x.lineTo(w, h); x.lineTo(0, h); x.closePath(); x.fill(); x.stroke();
      }
    }
  });
}
drawArt();
window.addEventListener('resize', drawArt);
if (document.fonts) document.fonts.ready.then(drawArt);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', drawArt);

// Copy email button. Change this to your real email address.
const email = 'you@example.com';
document.getElementById('copied').textContent = email;
document.getElementById('copy-email').addEventListener('click', () => {
  const out = document.getElementById('copied');
  navigator.clipboard.writeText(email)
    .then(() => { out.textContent = 'Copied ' + email; })
    .catch(() => {
      out.textContent = email;
      const sel = window.getSelection(), rg = document.createRange();
      rg.selectNodeContents(out); sel.removeAllRanges(); sel.addRange(rg);
    });
});
