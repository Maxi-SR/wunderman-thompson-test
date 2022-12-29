var dptosLocs = {
    "Artigas": ["Artigas", "Bella Unión"],
    "Canelones": ["Canelones", "Santa Lucía"],
    "Montevideo": ["Montevideo"],
    "Salto": ["Salto", "Daymán", "Arapey"]
};

const selectDepto = document.getElementById("depto");
const selectLoc = document.getElementById("loc");

Object.keys(dptosLocs).forEach((dpto) => {
    option = document.createElement("option");
    option.value = dpto;
    option.text = dpto;
    selectDepto.appendChild(option);
})

const changeLoc = (location) => {
    let options = selectLoc.getElementsByTagName('option');

    for (var i = options.length; i--;) {
        selectLoc.removeChild(options[i]);
    }

    Object.keys(dptosLocs).forEach((key) => {
        if (key == location) {
            dptosLocs[key].forEach((loc) => {
                option = document.createElement("option");
                option.value = loc;
                option.text = loc;
                selectLoc.appendChild(option);
            })
        };
    });
}

const getSelectedOption = (depto) => {
    var selVal = depto.value;
    changeLoc(selVal);
}
