document.getElementById("logo").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const height = document.documentElement.clientHeight;
    const progress = (scrollTop / (scrollHeight - height)) * 100;
    progressBar.style.height = progress + '%';
});
const scrollUpButton = document.querySelector('.scroll-up-button');

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});