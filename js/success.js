window.addEventListener("load", () => {});

let respose = JSON.parse(localStorage.getItem("response"));
let mainContainer = document.getElementById("mainContainer");

let div = document.createElement("div");
div.innerHTML = `<h2>Thank you. Your QR code will be sent to your registered email id.</h2>`;
mainContainer.append(div);
