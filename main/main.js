module.exports = function main(n) {
  var array = n.split("");
  var lcdcode ={
	  first:   ["._.","...","._.","._.","...","._.","._.","._.","._.","._."],
      second:  ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],
      third:   ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]
    }
  
  var one ="";
  var two ="";
  var three ="";
  
  for (var i=0; i<array.length; i++){
	  if (i == array.length-1){
		one += lcdcode.first[array[i]]+"\n";
	    two += lcdcode.second[array[i]]+"\n";
	    three += lcdcode.third[array[i]]+"\n";  
	  }
	  else{
	    one += lcdcode.first[array[i]]+" ";
	    two += lcdcode.second[array[i]]+" ";
	    three += lcdcode.third[array[i]]+" ";
      }
  }
  var sum = one + two + three;
  return sum;
  
};