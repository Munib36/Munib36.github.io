const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")

const body = document.querySelector("body")

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    one.style.left = `${clientX}px`;
    one.style.top = `${clientY}px`;

    two.style.left = `${clientX}px`;
    two.style.top = `${clientY}px`;

    three.style.left = `${clientX}px`;
    three.style.top = `${clientY}px`;
}
