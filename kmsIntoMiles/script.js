document.getElementById("submit").onclick=function(){
var kms = document.getElementById("kms").value;
kms=Number(kms);
var result = document.getElementById("miles");
console.log(kms);
result.value = kms*0.621371;
}
