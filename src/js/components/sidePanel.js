function sidePanel() {
  // кнопка поделиться своим профилем в сайдбаре
  const shareBtn = document.querySelector('.user-block__actions-share');
  shareBtn.addEventListener('click', (e) => {
    const target= e.target;
    const thisUrl = target.getAttribute('data-href'),
    thisTitle = target.closest('.user-block').querySelector('.user-block__name').textContent.trim();
    if (navigator.share) {
    navigator.share({
      title: thisTitle,
      url: thisUrl
    }).then(() => {
      // alert('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        // alert('Web Share API не поддерживается');
    }
  });

  const logoutBtn = document.querySelector('.user-block__actions-logout');
  logoutBtn.addEventListener('click', () => {
    // TODO: add fetch to logout
  });
}

export default sidePanel;