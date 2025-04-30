// INPUT for the button
document.getElementById("btn").addEventListener("click", ansr);

function ansr() {
    // PROCESS
    var trzB1 = +document.getElementById("b1").value;
    var trzB2 = +document.getElementById("b2").value;
    var trzH = +document.getElementById("h").value;
    // information
    let formula = (1/2)*(trzB1 + trzB2) * trzH;
    let round = formula.toFixed(2);
    // OUTPUT
    document.getElementById("output").innerHTML = round;
    //this part is for the border
    document.getElementById("output").classList.add("span");
    // this part is for the image of the check to pop up
    document.getElementById("img").src= "img/check.jpeg";
    document.getElementById("img").classList.add("check");
    // make the numbers disapear
    document.getElementById("h").value  = ""
    document.getElementById("b1").value  = ""
    document.getElementById("b2").value = ""
}