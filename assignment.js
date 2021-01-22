// 1#kilometerToMeter.
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var nanaMeter = kilometerToMeter(52);
console.log(nanaMeter);


// 2#budgetCalculator
function budgetCalculator(watch,mobile,laptop){
    var watchPrice = watch*50;
    var mobilePrice = mobile*100;
    var laptopPrice = laptop*500;
    total = watchPrice+mobilePrice+laptopPrice;
    return total;
} 
var kenakata = budgetCalculator(3,4,5);
console.log(kenakata);


// 3#hotelCost.
function hotelCost(days){
    var cost = 0;
    if (days<=10){
        cost = days * 100;
    } else if (days<=20){
        var first10Days = 10 * 100;
        var remaining = days-10;
        var next10Days = remaining * 80;
        cost = first10Days + next10Days; 
    } else{
        var first10Days = 10*100;
        var next10Days = 10*80;
        var remaining = days-20;
        var nextDaysAbove20 = remaining*50;
        cost = first10Days+next10Days+nextDaysAbove20;
    }
    return cost;
}
var costTotal = hotelCost(71);
console.log(costTotal);


// 4#megaFriend
function megaFriend(arra)
  {
    var friendList = arra[0].length;
    var result = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var megaName = arra[i].length;
        if (megaName > friendList) {
            result = arra[i];
            friendList = megaName;
        }
    }
    return result;
}
console.log(megaFriend(["shawon","santaw","shakira","ale","himel"]));

