const images = [
    "01_NetFlix.png",
    "02_FrostPunk1.png",
    "03_FrostPunk2.png",
    "04_CallistoProtocol.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = "img/"+chosenImage;

document.body.appendChild(bgImage);

