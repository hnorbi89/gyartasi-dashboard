
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