const getRandomCatImage = async function () {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    console.log(data);

    const catImg = document.querySelector(".cat-img");
    const imgUrl = data[0].url;

catImg.src = imgUrl;
}

getRandomCatImage();

const button = document.querySelector("button")

button.addEventListener("click", getRandomCatImage)