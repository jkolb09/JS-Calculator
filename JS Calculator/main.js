function calc(){
   var a = parseInt(document.queryselector("#value1").value);
    var b = parseInt(document.queryselector("#value2").value);
    var op = document.queryselector("operator").value;
    var calculate;}
if(op =="add"){
    calculate = a + b;
} else if (op== "sub") {
    calculate =a - b;
    } else if (op== "div") {
    calculate =a / b;
        } else if (op== "mul") {
    calculate =a * b;
}
    document.querySelector("#results").innerHTML = calculate;
}