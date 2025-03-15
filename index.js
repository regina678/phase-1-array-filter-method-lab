// Code your solution here
// Function 1
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(findMatching(drivers, 'Bobby')); 

// Function 2
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

console.log(fuzzyMatch(drivers, 'Sa'));

// Function 3
function matchName(driverArray, name) {
    return driverArray.filter(driverObj => driverObj.name.toLowerCase() === name.toLowerCase());
}


const driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
];

console.log(matchName(driverObjects, 'Bobby')); 


