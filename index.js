//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let fuelLevel = input.question("Please enter starting fuel (30,000 - 50,000): ")
fuelLevel = Number(fuelLevel);

let numberOfAstronauts = input.question("How many astronauts, up to 7: ");
numberOfAstronauts = Number(numberOfAstronauts)

let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (fuelLevel <30000 || fuelLevel > 50000){
  fuelLevel = input.question("Invalid number! Please enter a number between 30,000 - 50,000: ");
  fuelLevel = Number(fuelLevel);
}
//console.log(fuelLevel)

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
 
  while (numberOfAstronauts >7 || numberOfAstronauts <1){
  numberOfAstronauts = input.question("Invalid crew size! Keep size between 1-7 members: ");
  numberOfAstronauts = Number(numberOfAstronauts);
}
//console.log(numberOfAstronauts);

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

for (i = fuelLevel; i >= 100*numberOfAstronauts; i = i-(100*numberOfAstronauts))
//(fuelLevel * numberOfAstronauts))
{
  shuttleAltitude = Number(shuttleAltitude + 50)
//  console.log("does the code reach here?");
}
console.log(shuttleAltitude);


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
