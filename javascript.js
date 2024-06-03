const images = document.querySelectorAll('.gallery img');
  images.forEach(image => {
    image.addEventListener('click', () => {
      console.log("Image clicked: ", image.src);
    });
  });