// create an app that fairly flips a coin
// if the button push returns 1 = heads, 0 = tails


var coin = {
    flip: function() {
        var coinSide = Math.round(Math.random());
        var output = document.getElementById("flippedCoin");
        
        if(coinSide === 1) {
            output.innerText = "HEADS!"
            output.style.backgroundColor = "pink";
        } else {
            output.innerText = "TAILS!"
            output.style.backgroundColor = "blue";
        }
    }
};
