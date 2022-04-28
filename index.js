// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(42-num);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264 
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start-end) * 264 
}

// function calculatesFarePrice(start, end) {
//   const distTrav = distanceTravelledInFeet(start, end)
//   if (distTrav <= 400) {
//     return 0
//   } else if (distTrav <= 2000) {
//     return (distTrav-400) * 0.02
//   } else if (distTrav <= 2500) {
//     return 25
//   } else {
//     return "cannot travel that far"
//   }
// }

function calculatesFarePrice (start, destination){
  const distance = distanceFromHqInFeet(start, destination);
  if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return 0.02 * (distance - 400);
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
} 