const colorChangerForm = document.querySelector(".color-changer-form");
const colorCard = document.querySelector(".color-card");

colorChangerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const colorChangerInput = document.getElementById("color-name-input").value;
  colorCard.style.display = "flex";
  colorCard.style.backgroundColor = colorChangerInput;
  console.log(colorChangerInput);
});
