let customers = [];

function addCustomer() {
    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();

    if (name === "" || email === "" || phone === "" || city === "") {
        alert("Please fill all fields.");
        return;
    }

    const customer = {
        name: name,
        email: email,
        phone: phone,
        city: city
    };

    customers.push(customer);

    displayCustomers();

    document.getElementById("customerName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("city").value = "";
}

function displayCustomers() {
    const tableBody = document.getElementById("customerTableBody");

    tableBody.innerHTML = "";

    customers.forEach(function(customer, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.city}</td>
            <td>
                <button 
                    class="delete-btn"
                    onclick="deleteCustomer(${index})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteCustomer(index) {

    if (confirm("Are you sure you want to delete this customer?")) {
        customers.splice(index, 1);
        displayCustomers();
    }
}