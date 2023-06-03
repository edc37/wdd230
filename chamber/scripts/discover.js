const images = document.querySelectorAll("img");

images.forEach(img => {
    const newSrc = img.getAttribute('data-src');
    img.src = newSrc;
});