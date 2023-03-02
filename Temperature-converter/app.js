document.getElementById("submit").onclick=function()
{
    var temp = document.getElementById("Temperature").value;
    var int = document.getElementById("type-in").value;
    var convt = document.getElementById("type1").value;
    temp = parseFloat(temp);
    if (int==="celsius" && convt==="Fahrenheit1")
    {
        var converted = (temp*1.8) + 32;
        convt="Fahrenheit"
    }
    else if (int==="celsius" && convt==="Kelvin1")
    {
        var converted = temp+273.15;
        convt="Kelvin"
    }
    else if (int==="Fahrenheit" && convt==="celsius1")
    {
        var converted = (temp - 32)*(5/9);
        convt="Celsius"
    }
    else if (int==="Fahrenheit" && convt==="Kelvin1")
    {
        var converted = (temp - 32)*(5/9)+273.15;
        convt="Kelvin"
    }
    else if (int==="Kelvin" && convt==="celsius1")
    {
        var converted = temp-273.15;
        convt="Celsius"
    }
    else if (int==="Kelvin" && convt==="Fahrenheit1")
    {
        var converted = (temp-273.15)*1.8+32;
        convt="Fahrenheit"
    }

    document.write("<h1 font-family:  'segoe UI', font-size:2rem >"+temp+ " " + int +" is equivalent to "+converted+" " +convt+"!!</h1>") ;
}