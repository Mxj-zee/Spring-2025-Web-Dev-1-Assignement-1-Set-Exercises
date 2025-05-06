<<<<<<< HEAD
function calculateTotal() {
    const pricePerLiter = parseFloat(document.getElementById("pricePerLiter").value);
    const liters = parseFloat(document.getElementById("liters").value);

    if (isNaN(pricePerLiter) || isNaN(liters)) {
        document.getElementById("totalCost").textContent = "Please enter valid numbers.";
        return;
    }

    const total = pricePerLiter * liters;
    document.getElementById("totalCost").textContent = `Total Cost: £${total.toFixed(2)}`;
}
=======
function calculateTotal() {
    const pricePerLiter = parseFloat(document.getElementById("pricePerLiter").value);
    const liters = parseFloat(document.getElementById("liters").value);

    if (isNaN(pricePerLiter) || isNaN(liters)) {
        document.getElementById("totalCost").textContent = "Please enter valid numbers.";
        return;
    }

    const total = pricePerLiter * liters;
    document.getElementById("totalCost").textContent = `Total Cost: £${total.toFixed(2)}`;
}
>>>>>>> 12d0dc5d3d73f12995cafcd8e930595ed84207fd
