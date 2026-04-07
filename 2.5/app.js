
const calcForm = document.querySelector('.calc-form');
const tableBody = document.getElementById('production-body');
const modal = document.querySelector(".modal");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");
let rowToDelete = null;
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const quantityInput = document.getElementById("quantity");

plusBtn.addEventListener('click', ()=>{
    quantityInput.value = parseInt(quantityInput.value) +1;
});

minusBtn.addEventListener('click', ()=>{
    if(parseInt(quantityInput.value) > 1){
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

calcForm.addEventListener('submit', function(event){
    // megállítom az oldal újratöltődését
    event.preventDefault();

    const productName = document.getElementById('profil').value;
    const quantity = document.getElementById('quantity').value;
    const rowNumber = document.getElementById("row-number").value;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName} mm</td>
        <td>${rowNumber} soros</td>
        <td>${quantity} db</td>
        <td><button class="btn-outline delete-btn">Törlés</button></td>
    `;
    tableBody.appendChild(newRow);
    calcForm.reset();
});

tableBody.addEventListener('click', function (event){
    if (event.target.classList.contains('delete-btn')){
        //megkeressük a legközelebbi tr elemet, ami a gomb szülője
        rowToDelete = event.target.closest('tr');
        
        //megkérdezzük hogy biztosan törölni akarja-e a felhasználó
        modal.style.display = "flex";

        function closeModal(){
            modal.style.opacity = "0";
            modal.style.transition = "opacity 0.3s ease-out";
            modal.querySelector(".modal-content").style.transform = "translateY(0px)";
            modal.querySelector(".modal-content").style.transition = "transform 0.3s ease-out";

            setTimeout(()=>{
                modal.style.display = "none";

                //vissza állítjuk az eredeti stílusokat a kövtkező megnyitáshoz
                modal.style.opacity = "1";
                modal.querySelector(".modal.content").style.transform = "translateY(0)";
                modal.style.transition = "none";
                modal.querySelector(".modal.content").style.transition = "none";
                rowToDelete = null;
            }, 300);
        }

        //mégse gomb
        cancelBtn.addEventListener('click', ()=>{
            closeModal();
        })

        //törlés gomb 
        confirmBtn.addEventListener('click', ()=>{
            if(rowToDelete){
                rowToDelete.remove();
                closeModal();
            }
        })

    }
});
