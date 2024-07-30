
var firstname = document.getElementById('name');
var amount = document.getElementById('amount');
var data = document.getElementById('data');

function addElements() {
    var option = document.getElementById('option');
    if(option.value === "default" || firstname.value === "" || amount.value === ""){
        alert("Please fill all fields correctly.");
        return;
    }
    var row = document.createElement('tr');
    row1(option.value, row);
    row2(firstname.value, row);
    row3(amount.value, row);
    row4(row);
    
    data.appendChild(row);
    firstname.value = "";
    amount.value = "";
    option.value = "default";
}

function row1(value, row) {
    var type = document.createElement('td');
    type.textContent = value;
    row.appendChild(type);
}

function row2(firstname, row) {
    var name = document.createElement('td');
    name.textContent = firstname;
    row.appendChild(name);
}

function row3(amt, row) {
    var amount = document.createElement('td');
    amount.textContent = amt;
    row.appendChild(amount);
}

function row4(row) {
    var options = document.createElement('td');
    var button = document.createElement('button');
    button.textContent = "Delete";
    button.onclick = function() {
        row.remove();
    };
    options.appendChild(button);
    row.appendChild(options);
}
