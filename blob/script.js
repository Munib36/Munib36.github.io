const blob = document.querySelector(".blob")
const body = document.querySelector("body")

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: clientX + "px",
        top: clientY + "px"
    }, { duration: 1000, fill: "forwards" });
}