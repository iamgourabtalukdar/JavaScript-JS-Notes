const dogImgElem = document.getElementById("dog-img");
const nextBtn = document.getElementById("next-btn");

function getDogImage() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");

  xhr.addEventListener("load", () => {
    const data = JSON.parse(xhr.response);
    dogImgElem.setAttribute("src", data.message);
    // dogImgElem.src = data.message;
  });

  xhr.send();
}

nextBtn.addEventListener("click", getDogImage);
