const img = document.querySelector('img')
img.ondragstart = () => {
  return false;
};