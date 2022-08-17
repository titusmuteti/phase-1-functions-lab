const scuberHeadquater = 42;

function distanceFromHqInBlocks(pickUpPoint) {
   return (pickUpPoint> scuberHeadquater) ? (pickUpPoint-scuberHeadquater) : (scuberHeadquater - pickUpPoint);   
}

function distanceFromHqInFeet(pickUpPoint) {
    return (pickUpPoint> scuberHeadquater)? (pickUpPoint-scuberHeadquater)*264 : (scuberHeadquater - pickUpPoint)*264;
}

function distanceTravelledInFeet(start, destination) {
    return (destination > start)? (destination-start)*264 : (start-destination)*264;
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet<400) {
        return 0;
    }else if (distanceInFeet>400 && distanceInFeet<2000) {
        return 2.56;
    } else if (distanceInFeet > 2000 && distanceInFeet< 2500) {
        return 25;
    } else if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    }
}