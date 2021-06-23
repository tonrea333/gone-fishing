const prompt = require('prompt-sync')({ sigint: true });

console.log("You've gone fishing! Try to maximize the value of your caught fish.  You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.\n");
console.log();
console.log();
console.log("=================================================================")



console.log("The time is 6:00am. So far you've caught: 0 fish, 0 lbs, $0.00")
let userChoice = prompt("Your action: [c]atch or [r]elease: ")
console.log();
console.log();
console.log();
console.log("=======================================================");


let hours = 6;
let fishWeights = 0;
let sumfishWeights = 0;
let allfishCaught = [];
let netfishValue = 0;
let sumfishValue = 0;
let caTch = "c";
let reLease = "r";

if (userChoice === caTch) {



    while (hours !== 12) {

        hours = hours + 1;






        //while (userChoice == "c")


        
        



        //function for time. 

        function catchFish() {

            return typesofFish[Math.floor(Math.random() * typesofFish.length)];

        }

        const typesofFish = [
            {

                fishName: "largeMouth",
                fishWeight: 1,
                fishValue: 6,
            },
            {

                fishName: "Big largeMouth",
                fishWeight: 3,
                fishValue: 12.00,
            },
            {
                fishName: 'Channel Fish',
                fishWeight: 2,
                fishValue: 3.00,
            },
            {
                fishName: 'Large Channel Fish',
                fishWeight: 3,
                fishValue: 5.00,
            },
            {
                fishName: "Bluegill",
                fishWeight: 1,
                fishValue: 3.00,
            },
            {
                fishName: "Huge Bluegill",
                fishWeight: 3,
                fishValue: 8.00,
            },
            {
                fishName: "Green Sunfish",
                fishWeight: 2,
                fishValue: 4.00,
            },
            {
                fishName: "Small Green Sunfish",
                fishWeight: 1,
                fishValue: 2.00,
            },
            {
                fishName: "Small Redear Sunfish",
                fishWeight: 1,
                fishValue: 2.00,
            },
            {
                fishName: "Redear Sunfish",
                fishWeight: 2,
                fishValue: 5.00,
            }
        ];
        //Need to add algorithm to calculate #of fish, lbs & $ value.
        allfishCaught = catchFish(typesofFish);
        //====================================================================
        fishWeights = allfishCaught.fishWeight;
        sumfishWeights = sumfishWeights + fishWeights;
        //====================================================================
        netfishValue = allfishCaught.fishValue;
        sumfishValue = sumfishValue + netfishValue;

        //=====================================================================           

        if (sumfishWeights >= 10) { 
            let x = allfishCaught.pop();
            console.log("Your recent catch was released because it exceed 10 lbs gross weight.")
        }  //automatically release fish
        //=====================================================================

        console.log("The time is", hours, ":00am. So far you've caught: 0 fish,", sumfishWeights, "lbs, $", sumfishValue, ".00");
        console.log();
        console.log("You caught a", allfishCaught.fishName);
        console.log(fishWeights, "lbs.");
        console.log(netfishValue, ".00");
        //console.log(catchHold);
        console.log()
        userChoice = prompt("Your action: [c]atch or [r]elease: ") //Need way to release fish
    }
}



console.log();
console.log();

if (hours == 12) {
    console.log("The time is", hours, ":00pm. Time is up!")
    console.log();
    console.log("You caught     fish"); //add number of fish caught
    console.log()  //the fish caught goes here
    console.log()
    console.log("Total weight:", sumfishWeights, "lbs.")//Weight of fish
    console.log("Total value:", sumfishValue, ".00")  //total value
}











