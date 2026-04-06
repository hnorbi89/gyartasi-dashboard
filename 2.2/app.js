
const calcForm = document.querySelector('.calc-form');
const tableBody = document.getElementById('production-body');

calcForm.addEventListener('submit', function(event){
    // megállítom az oldal újratöltődését
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${quantity}</td>
        <td>én voltam</td>
        <td><span class="status-pending">Folyamatban</span></td>
        <td><button class="btn-outline delete-btn">Törlés</button></td>
    `;
    tableBody.appendChild(newRow);
    calcForm.reset();
});

tableBody.addEventListener('click', function (event){
    if (event.target.classList.contains('delete-btn')){
        //megkeressük a legközelebbi tr elemet, ami a gomb szülője
        const rowToDelete = event.target.closest('tr');
        
        //megkérdezzük hogy biztosan törölni akarja-e a felhasználó
        if(confirm('Biztosan törölni szeretné a sort?')){
            rowToDelete.remove();
        }

    }
});