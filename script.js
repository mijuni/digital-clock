let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");

let clock = setInterval(function time() {
  let dateNow = new Date();
  let hourNow = dateNow.getHours();
  let minNow = dateNow.getMinutes();
  let secNow = dateNow.getSeconds();

  if (hourNow < 10) {
    hourNow = "0" + hourNow;
  }
  if (minNow < 10) {
    minNow = "0" + minNow;
  }
  if (secNow < 10) {
    secNow = "0" + secNow;
  }

  hour.innerText = hourNow;
  minute.innerText = minNow;
  seconds.innerText = secNow;
}, 1000);
