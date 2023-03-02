var d1 = Math.random();
    d1=d1*6+1;
    d1=Math.floor(d1);
    var d2 = Math.random();
    d2=d2*6+1;
    d2=Math.floor(d2);
    im1(d1);
    im2(d2);
    if(d1>d2)
    {
        document.getElementById("heading").textContent="Player 1 Wins!🎉🎉";
    }
    else if(d2>d1){

    document.getElementById("heading").textContent="Player 2 Wins!🎉🎉";}
    else{
        document.getElementById("heading").textContent="Draw!";
    }
    function im1(x)
    {
      if(x===1)
      {
        document.getElementById("d1").src="images/dice1.png";
    
      }
      else if(x===2)
      {
        document.getElementById("d1").src="images/dice2.png";
    
      }
      else if(x===3)
      {
        document.getElementById("d1").src="images/dice3.png";
    
      }
      else if(x===4)
      {
        document.getElementById("d1").src="images/dice4.png";
    
      }
      else if(x===5)
      {
        document.getElementById("d1").src="images/dice5.png";
    
      }
      else if(x===6)
      {
        document.getElementById("d1").src="images/dice6.png";
    
      }
    }
    function im2(x)
    {
      if(x===1)
      {
        document.getElementById("d2").src="images/dice1.png";
    
      }
      else if(x===2)
      {
        document.getElementById("d2").src="images/dice2.png";
    
      }
      else if(x===3)
      {
        document.getElementById("d2").src="images/dice3.png";
    
      }
      else if(x===4)
      {
        document.getElementById("d2").src="images/dice4.png";
    
      }
      else if(x===5)
      {
        document.getElementById("d2").src="images/dice5.png";
    
      }
      else if(x===6)
      {
        document.getElementById("d2").src="images/dice6.png";
    
      }
    
    
    }
