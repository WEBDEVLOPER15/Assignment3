function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var loveMeter = kilometerToMeter(150);
console.log(loveMeter);
var hateMeter = kilometerToMeter(450);
console.log(hateMeter);
var breakUpMeter = kilometerToMeter(800);
console.log(breakUpMeter);


// ====budgetCalculator =====/

function budgetCalculator(watch ,mobile,laptop){
    var totalPrice =0;
    if (watch >= 0 && phone>=0 && laptop>=0){

        var watch = 50;
 	 
        var phone = 100;
        var laptop = 500;
        var totalPrice = watch +phone +laptop;
    }
    else{
        return totalPrice;

    }
    var result=watch*50 + mobile*100 + laptop*500;
    return result;
}
var sum=budgetCalculator(2,3,5);
console.log(sum)

// =====hotelCost==================
function hotelCost(day){
    var day = 10;
    if(day <= 10){
        
        totalDay = day*100;
    }
    else if(day<=20){
    
       
        totalDay = day * 80;
    }
    else{
        
        
        totalDay = day*50;
    }
    return totalDay;
    }
    var count = hotelCost(22);
    console.log(count);
    // =======megaFriend==================
    function megaFriend(array) {
        var longestWord = "";
      
        array.forEach(function(word) {
          if(word.length > longestWord.length) {
            longestWord = word;
          }
        });
      
        return longestWord;
      }
      
      var word = megaFriend(["Solim","korim","pritom", "robi", "shoovon", "kobi"]);
      console.log(word);