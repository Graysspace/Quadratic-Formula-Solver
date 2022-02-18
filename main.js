let output = document.getElementById("answer");
let btnResult = document.getElementById("button-output");


btnResult.addEventListener("click", solver)


function solver() {
    // Recieve Inputs
let valaEl = +document.getElementById("valueA").value;
let valbEl = +document.getElementById("valueB").value;
let valcEl = +document.getElementById("valueC").value;
    // Calculations and Output
let discriminate = (Math.pow(valbEl,2) - 4 * valaEl * valcEl);
let positiveRoot = (-valbEl + Math.sqrt(Math.pow(valbEl,2) - 4 * valaEl * valcEl)) / (2 * valaEl);
let negativeRoot = (-valbEl - Math.sqrt(Math.pow(valbEl,2) - 4 * valaEl * valcEl)) / (2 * valaEl);
    if (discriminate > 0) {
        output.innerHTML = "There are 2 roots. They are: " + positiveRoot +  " and " + negativeRoot;
    } else if (discriminate === 0) {
        output.innerHTML = "There is 1 root. It is: " + positiveRoot;
    } else {
        output.innerHTML = "There are no roots.";
    }
}


