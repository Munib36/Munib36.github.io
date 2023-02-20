const phoneNumber = "962790960691";
const message = "Hello there!";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
document.querySelector("#whatsapp-link").href = whatsappLink;
