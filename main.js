const btn = document.querySelector('.btn'),
      share = document.querySelector('.share-active');

share.style.display = 'none';


btn.addEventListener('click', () => {
    if(share.style.display == 'none'){
        share.style.display = 'flex';
        btn.classList.add('svg');
    } else {
        share.style.display = 'none';
        btn.classList.remove('svg');
    }
});
