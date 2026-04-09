const calcForm = document.querySelector(".calc-form");
const modal = document.querySelector(".modal");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const quantityInput = document.getElementById("quantity");
const cardGrid = document.querySelector(".card-grid");
const profil = document.getElementById("profil");
const order = document.getElementById("order");
const rowNumber = document.getElementById("row-number");
let optionNumber = 1;
const orders = [];

plusBtn.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

minusBtn.addEventListener("click", () => {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

calcForm.addEventListener("submit", function (event) {
  // megállítom az oldal újratöltődését
  event.preventDefault();
  if (!orders.includes(order.value)) {
    cardGrid.appendChild(createArticle());
    order.appendChild(createOption());
    orders.push(order.value);
  } else {
    const currentOrder = document.getElementById(`${order.value}`);
    currentOrder.appendChild(addArticle());
  }
  calcForm.reset();
});

function addArticle() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${profil.value} mm</td>
    <td>${rowNumber.value} soros</td>
    <td>${quantityInput.value} db</td>
  `;
  return tr;
}

function createOption() {
  const option = document.createElement("option");
  optionNumber++;
  option.value = `Új rendelés ${optionNumber}`;
  option.textContent = `Új rendelés ${optionNumber}`;
  return option;
}

function createArticle() {
  const article = document.createElement("article");
  article.classList.add("card");

  article.innerHTML = `
    <table class ="production-table" >
      <thead>
        <tr>
          <th colspan="3" style="text-align:center;">${order.value}</th>
        </tr>
      </thead>
      <tbody id="${order.value}">
        <tr>
          <td>${profil.value} mm</td>
          <td>${rowNumber.value} soros</td>
          <td>${quantityInput.value} db</td>
        </tr>
      </tbody>

    </table>
    `;
  return article;
}

function closeModal() {
  modal.style.opacity = "0";
  modal.style.transition = "opacity 0.3s ease-out";
  modal.querySelector(".modal-content").style.transform = "translateY(0px)";
  modal.querySelector(".modal-content").style.transition =
    "transform 0.3s ease-out";

  setTimeout(() => {
    modal.style.display = "none";
    //vissza állítjuk az eredeti stílusokat a kövtkező megnyitáshoz
    modal.style.opacity = "1";
    modal.querySelector(".modal-content").style.transform = "translateY(0)";
    modal.style.transition = "none";
    modal.querySelector(".modal-content").style.transition = "none";
    rowToDelet = null;
  }, 300);
}

//mégse gomb
cancelBtn.addEventListener("click", () => {
  rowToDelete = null;
  closeModal();
});

//törlés gomb
confirmBtn.addEventListener("click", () => {
  if (rowToDelete) {
    rowToDelete.remove();
    closeModal();
  }
});
