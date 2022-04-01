// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  


function findMatching(arr, string){
    let match = arr.filter(elem => elem.toLowerCase() === string.toLowerCase())
    return match;
}
function fuzzyMatch(arr, string){
    let match = arr.filter(elem => elem.startsWith(string))
    return match;
}

function matchName (arr, string){
    let match = arr.filter(elem => elem.name === string);
    return match;
}

//console.log(matchName(drivers, 'Bobby'));





