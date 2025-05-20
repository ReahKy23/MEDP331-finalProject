document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');

  const modalName = document.getElementById('modalName');
  const modalYears = document.getElementById('modalYears');
  const modalMessage = document.getElementById('modalMessage');

  document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', () => {
      const name = post.dataset.name || 'Unknown';
      const birth = post.dataset.birth || '?';
      const death = post.dataset.death || '?';
      const description = post.dataset.description || 'No description provided';

      modalName.textContent = name;
      modalYears.textContent = `${birth}–${death}`;
      modalMessage.textContent = description;

      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
