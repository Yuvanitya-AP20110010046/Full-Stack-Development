document.getElementById("find").onclick=function()
{
    var number = document.getElementById("num1").value;
    var limit = document.getElementById("num2").value;
    var result = document.getElementById("result");

    for(var i=1;i<limit;i=i+1){
        line = `${i}*${number}=${i * number}`;
        result.innerHTML = result.innerHTML + "<br>" + line;
        }
}