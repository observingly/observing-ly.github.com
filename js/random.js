// JavaScript Document
function randomize(){
	
	//Start of Player 1
	var r1 = Math.floor(Math.random() * 10)+1;
	document.write("<img src=images/c" + r1 + ".png>" );
	
	
	var r2 = Math.floor(Math.random() * 10)+1;
	document.write("<img src=images/c" + r2 + ".png>" );
	
	var sumPlayer1 = r1+r2;
	
	if(sumPlayer1>=10){
			
		sumPlayer1 -= 10;
		document.write("<br>TOTAL: " + sumPlayer1);
	
	} else {
		document.write("<br>TOTAL: " + sumPlayer1);	
	}
	//End of Player 1
	
	document.write("<br>");
	
	//Start of Player 2
	var r3 = Math.floor(Math.random() * 10)+1;
	document.write("<img src=images/c" + r3 + ".png>" );
	
	
	var r4 = Math.floor(Math.random() * 10)+1;
	document.write("<img src=images/c" + r4 + ".png>" );
	
	var sumPlayer2 = r3+r4;
	
	if(sumPlayer2>=10){
			
		sumPlayer2 -= 10;
		document.write("<br>TOTAL: " + sumPlayer2);
	
	} else {
		document.write("<br>TOTAL: " + sumPlayer2);	
	}
	//End of Player 2
	
	//
	document.write("<br><br>");
	
	if(sumPlayer1==sumPlayer2){
		document.write("IT'S A TIE");
	} else if (sumPlayer1>sumPlayer2){
		document.write("PLAYER 1 WINS");	
	} else {
		document.write("PLAYER 2 WINS");	
	}
}