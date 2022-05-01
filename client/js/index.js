const campos = [
    document.getElementById("data"),
    document.getElementById("quantidade"),
    document.getElementById("valor"),
];
let tbody = document.querySelector(" table tbody");

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault();
    let tr = document.createElement("tr");
    campos.forEach((campo) => {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    })
    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);
    document.querySelector(".form").reset();
});