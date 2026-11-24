
let expenses = [];

function addExpense() {
    let name = document.getElementById("name").value.trim();
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name === "" || document.getElementById("amount").value === "" ||
        !Number.isFinite(amount) || amount <= 0 || category === "") {
        alert("Please enter valid details!");
        return;
    }

    expenses.push({name, amount, category});

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    displayExpenses();
}

function displayExpenses() {
    let list = document.getElementById("expenseList");
    let total = 0;
    list.innerHTML = "";

    expenses.forEach((e, i) => {
        total += e.amount;

        if (document.getElementById("filter").value !== "All" &&
            document.getElementById("filter").value !== e.category) return;

        let div = document.createElement("div");
        div.className = "expense-item";

        let text = document.createElement("span");
        text.innerText = e.name + " - ₹" + e.amount + " - " + e.category;

        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.className = "deleteBtn";

        btn.onclick = function() {
            expenses.splice(i, 1);
            displayExpenses();
        };

        div.append(text, btn);
        list.appendChild(div);
    });

    document.getElementById("total").innerText = total;

    if (list.innerHTML === "") {
        list.innerHTML = '<p class="empty">No expenses found.</p>';
    }
}
