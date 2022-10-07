const clock = document.querySelector("#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);

// setinterval(sayHello, 5000);

// setTimeout(sayHello,5000);

