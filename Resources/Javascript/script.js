const image = document.querySelector(".profile-image");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;


  
  const size = Math.min(
    300,
    200 + scrollY * 0.3
  );
  
  image.style.backgroundSize = `${size}% auto`;
});