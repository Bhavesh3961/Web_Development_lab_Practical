
function addExpense() {

    let name = document.getElementById("name").value.trim();
    let amountInput = document.getElementById("amount").value;
    let amount = Number(amountInput);
    let category = document.getElementById("category").value;

    if (name === "" || amountInput === "" ||
        !Number.isFinite(amount) || amount <= 0 ||
        category === "") {

        alert("Please enter all details correctly!");
        return;
    }

    let total = document.getElementById("total");

    total.innerText = Number(total.innerText) + amount;

    alert("Expense added successfully!");

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
}
