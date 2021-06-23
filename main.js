const prompt = require('prompt-sync')({sigint: true});

console.log("You've gone fishing! Try to maximize the value of your caught fish.  You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.\n");
console.log();
console.log();
console.log("=================================================================")



let userChoice =prompt("Your action: [c]atch or [r]elease: ");

while (userChoice == "c")
{let userChoice =prompt("Your action: [c]atch or [r]elease: ");

let caTch = "c";
let reLease = "r";
let catchHold = [];


function releaseFish(reLease) {
    return 

}

//function for time.  Source of code 



  function catchFish(caTch){



    return typesofFish[Math.floor(Math.random()*typesofFish.length)];


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
    {    fishName: "Small Redear Sunfish",
        fisthWeight: 1,
        fishValue: 2,  
    },
    {   fishName: "Redear Sunfish",
        fisthWeight: 2,
        fishValue: 5,  
    }
];

console.log (catchFish(typesofFish));
console.log(catchHold);


if (caTch == "c") {
    
}


}
        
    

