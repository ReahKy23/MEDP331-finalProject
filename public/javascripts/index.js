document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('entryModal');
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
