document.getElementById("find").onclick = function(){
    let a = document.getElementById("aValue").value;
    a=Number(a);
    let b = document.getElementById("bValue").value;
    b=Number(b);
    let c = document.getElementById("cValue").value;
    c=Number(c);
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");

    let d = (b*b)-(4*a*c);
    let i = (-1*b + (Math.sqrt(d)))/(2*a);
    let j = (-1*b - (Math.sqrt(d)))/(2*a);
    if(isNaN(i) || isNaN(j)){
        value1.innerHTML = "Solution 1 : " + "Imaginary Solution";
        value2.innerHTML = "Solution 2 : " + "Imaginary Solution";}
    else{

        document.getElementById("value1").innerHTML = "Solution 1 : " + i;
        document.getElementById("value2").innerHTML = "Solution 2 : " + j;
    }
 

}