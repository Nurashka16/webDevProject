function toggleLike() {
    const likeBtn = document.getElementById('likeBtn');
    const isLiked = likeBtn.classList.contains('active');
    if (isLiked) {
        likeBtn.classList.remove('active');
        likeBtn.setAttribute('aria-pressed', 'false');
    } else {
        likeBtn.classList.add('active');
        likeBtn.setAttribute('aria-pressed', 'true');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        likeBtn.addEventListener('click', toggleLike);
    }
});