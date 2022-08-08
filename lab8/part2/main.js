function add() {
    var input1 = Number(document.getElementById("box1").value);
    var input2 = Number(document.getElementById("box2").value);
    var sum = input1 + input2;
    document.getElementById("res").innerHTML = sum;
    if (sum<0) {
        document.getElementById("res").style.color="red";
    }
    else {
        document.getElementById("res").style.color="black";
    }
}

function minus() {
    var input1 = Number(document.getElementById("box1").value);
    var input2 = Number(document.getElementById("box2").value);
    var diff = input1 - input2;
    document.getElementById("res").innerHTML = diff;
    if (diff<0) {
        document.getElementById("res").style.color="red";
    }
    else {
        document.getElementById("res").style.color="black";
    }
}

function mul() {
    var input1 = Number(document.getElementById("box1").value);
    var input2 = Number(document.getElementById("box2").value);
    var multi = input1 * input2;
    document.getElementById("res").innerHTML = multi;
    if (multi<0) {
        document.getElementById("res").style.color="red";
    }
    else {
        document.getElementById("res").style.color="black";
    }
}

function div() {
    var input1 = Number(document.getElementById("box1").value);
    var input2 = Number(document.getElementById("box2").value);
    var output = input1 / input2;
    document.getElementById("res").innerHTML = output;
    if (output<0) {
        document.getElementById("res").style.color="red";
    }
    else {
        document.getElementById("res").style.color="black";
    }
}

function exp() {
    var input1 = Number(document.getElementById("box1").value);
    var input2 = Number(document.getElementById("box2").value);
    var output = input1 ** input2;
    document.getElementById("res").innerHTML = output;
    if (output<0) {
        document.getElementById("res").style.color="red";
    }
    else {
        document.getElementById("res").style.color="black";
    }
}

function cle() {
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
    document.getElementById("res").innerHTML = "";
}