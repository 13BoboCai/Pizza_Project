// function to select the options and display result
function getReceipt() {
    var text1 = "<h3>you have ordered: </h3>"
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"
        }
    }
    // if statements for the choices
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;

    }
    else if (selectedSize === "Small Pizza") {
        sizeTotal = 0;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16
    }

    runningTotal = sizeTotal;
    // displaying total size
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    // displaying total price

    console.log("SubTotal: $" + runningTotal + ".00");

    getTopping(runningTotal, text1);
}

// function to check what toppings the user has added
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    // looping on the toppings array to see what user has checked
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: (" + toppingArray[j].value + ")")
            text1 = text1 + toppingArray[j].value + "<br>"
        }
    }

    // if the user has selected topings
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }
    // else user has no toppings
    else {
        toppingTotal = 0;
    }

    // displaying the result in console and on front end
    runningTotal = runningTotal + toppingTotal
    console.log("Total selected topping items: " + toppingCount);
    console.log(toppingCount + "topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("purchaseTotal: " + "$" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3> Total: <strong>$" + runningTotal + ".00" + "</strong> </h3>"

}