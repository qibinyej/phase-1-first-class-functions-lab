const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(names){
    return drivers.slice(0, -2);
}

const returnLastTwoDrivers = function(names){
    return drivers.slice(2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers, 
    ];

const createFareMultiplier = i =>
    fare => fare*i;

const fareDoubler = function(i){
    return i*2;
}

const fareTripler = function(i){
    return i*3;
}

const selectDifferentDrivers = (i, fn) => {
    if (fn === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(i)
    } else{
        return returnLastTwoDrivers(i);
    };
}







