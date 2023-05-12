const box = document.getElementById("box")
const body = document.querySelector("body")

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    box.style.left = `${clientX-10}px`;
    box.style.top = `${clientY-10}px`;
}
