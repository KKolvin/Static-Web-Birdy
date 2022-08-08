function add() {
    let sum;
    let input1;
    let input2;
    input1 = Number(document.getElementById("box1").value);
    console.log(input1);
    input2 = Number(document.getElementById("box2").value);
    console.log(input2);
    sum = input1 + input2;
    console.log(sum);
    document.getElementById("box3").value = sum;
}