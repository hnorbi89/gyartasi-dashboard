
const calcForm = document.querySelector('.calc-form');

calcForm.addEventListener('submit', function(event){
    // megállítom az oldal újratöltődését
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;

    console.log("Termék neve: " + productName + ", Mennyiség: " + quantity);
    alert("Termék neve: " + productName + ", Mennyiség: " + quantity);
});