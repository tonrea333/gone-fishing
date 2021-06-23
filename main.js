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

while (hours !== 12) {

    hours = hours + 1;



    //while (userChoice == "c")


    let caTch = "c";
    let reLease = "r";
    let catchHold = [];



    //function for time. 

    function catchFish(caTch) {
       
        return typesofFish[Math.floor(Math.random() * typesofFish.length)];

    }

    const typesofFish = [
        {

            fishName: "largeMouth",
            fishWeight: 2,
            fishValue: 6
        },
        {

            fishName: "Big largeMouth",
            fishWeight: 4,
            fishValue: 12
        },
        {
            fishName: 'Channel Fish',
            fishWeight: 2,
            fishValue: 3
        },
        {
            fishName: 'Large Channel Fish',
            fishWeight: 3,
            fishValue: 5
        },
        {
            fishName: "Bluegill",
            fishWeight: 2,
            fishValue: 3
        },
        {
            fishName: "Huge Bluegill",
            fishWeight: 5,
            fishValue: 8
        },
        {
            fishName: "Green Sunfish",
            fishWeight: 2,
            fishValue: 4,
        },
        {
            fishName: "Small Green Sunfish",
            fishWeight: 1,
            fishValue: 2,
        },
        {
            fishName: "Small Redear Sunfish",
            fisthWeight: 1,
            fishValue: 2,
        },
        {
            fishName: "Redear Sunfish",
            fisthWeight: 2,
            fishValue: 5,
        }
    ];
    //Need to add algorithm to calculate #of fish, lbs & $ value.



    console.log("The time is", hours, ":00am. So far you've caught: 0 fish, 0 lbs, $0.00")
    console.log();
    console.log("You caught a", catchFish(typesofFish)["fishName"]);
    //console.log(catchHold);
    console.log()
    userChoice = prompt("Your action: [c]atch or [r]elease: ") //Need way to release fish




    if (reLease) {
        typesofFish.pop()
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
    console.log()  //Weight of fish
    console.log()  //total value
}











