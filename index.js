// // Загрузка header и footer
// async function loadHeaderFooter() {
//     const headerResponse = await fetch('partials/header.html');
//     const footerResponse = await fetch('partials/footer.html');

//     const headerHtml = await headerResponse.text();
//     const footerHtml = await footerResponse.text();

//     document.querySelector('.header-container').innerHTML = headerHtml;
//     document.querySelector('.footer-container').innerHTML = footerHtml;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     loadHeaderFooter();
// });