document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('entryGrid');

  try {
    const res = await fetch('/api/entries');
    const entries = await res.json();

    entries.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'grid-item';

      // Format lifespan text
      const birth = entry.birthYear || '—';
      const death = entry.deathYear || '—';

      div.innerHTML = `
        ${entry.imageUrl ? `<img src="${entry.imageUrl}" alt="${entry.name}">` : `<div class="image-placeholder">No Image</div>`}
        <p class="lifespan">${birth}–${death}</p>
      `;

      grid.appendChild(div);
    });

  } catch (err) {
    console.error('Failed to fetch entries:', err);
  }
});
