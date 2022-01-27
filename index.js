var number1 = Math.floor(Math.random() * 6 + 1);
var number2 = Math.floor(Math.random() * 6 + 1);

      while(number1 == number2){ 
        number1 = Math.floor(Math.random() * 6 + 1);
        number2 = Math.floor(Math.random() * 6 + 1);
      }

      var randomImageSource1 = "images/dice" + number1 + ".png";

      var image1 = document.querySelector(".img1");
      image1.setAttribute("src", randomImageSource1);

      var randomImageSource2 = "images/dice" + number2 + ".png";

      var image2 = document.querySelector(".img2");
      image2.setAttribute("src", randomImageSource2);
    
      if(number1 > number2){
        document.querySelector("h1").innerHTML = "Player 1 won!";
      } else {
        document.querySelector("h1").innerHTML = "Player 2 won!";
      }

      console.log(randomImageSource1, randomImageSource2);