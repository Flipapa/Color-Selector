let colorInput = document.querySelector(".container");

colorInput.addEventListener("input", (event) => {
  let target = event.target;
  let rInput = document.querySelector(".r-slide").value;
  let gInput = document.querySelector(".g-slide").value;
  let bInput = document.querySelector(".b-slide").value;
  let hexNum = document.querySelector(".hex");

  target.parentElement.lastElementChild.textContent = target.value;
  // console.log(target.value);
  document.querySelector(
    "body"
  ).style.background = `rgb(${rInput}, ${gInput}, ${bInput})`;

  let hexR = Number(rInput).toString(16).toUpperCase();
  hexR = hexR.length > 1 ? hexR : "0" + hexR;

  let hexG = Number(gInput).toString(16).toUpperCase();
  hexG = hexG.length > 1 ? hexG : "0" + hexG;

  let hexB = Number(bInput).toString(16).toUpperCase();
  hexB = hexB.length > 1 ? hexB : "0" + hexB;

  hexNum.textContent = `#${hexR}${hexG}${hexB}`;

  if (Number(rInput) + Number(gInput) + Number(bInput) > 256) {
    document.querySelector(".title").style.color = "black";
    hexNum.style.color = "black";
  } else {
    document.querySelector(".title").style.color = "white";
    hexNum.style.color = "white";
  }
});
