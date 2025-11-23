function handleLikeClick() {
    toggleLikeDislike('like');
}

function handleDislikeClick() {
    toggleLikeDislike('dislike');
}

function toggleLikeDislike(type) {
    const likeBtn = document.getElementById('likeBtn2');
    const dislikeBtn = document.getElementById('dislikeBtn2');

    if (type === 'like') {
        if (likeBtn.classList.contains('active')) {
            likeBtn.classList.remove('active');
            likeBtn.setAttribute('aria-pressed', 'false');
        } else {
            likeBtn.classList.add('active');
            likeBtn.setAttribute('aria-pressed', 'true');
            dislikeBtn.classList.remove('active');
            dislikeBtn.setAttribute('aria-pressed', 'false');
        }
    } else if (type === 'dislike') {
        if (dislikeBtn.classList.contains('active')) {
            dislikeBtn.classList.remove('active');
            dislikeBtn.setAttribute('aria-pressed', 'false');
        } else {
            dislikeBtn.classList.add('active');
            dislikeBtn.setAttribute('aria-pressed', 'true');
            likeBtn.classList.remove('active');
            likeBtn.setAttribute('aria-pressed', 'false');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const likeBtn = document.getElementById('likeBtn2');
    const dislikeBtn = document.getElementById('dislikeBtn2');

    if (likeBtn) likeBtn.addEventListener('click', handleLikeClick);
    if (dislikeBtn) dislikeBtn.addEventListener('click', handleDislikeClick);
});