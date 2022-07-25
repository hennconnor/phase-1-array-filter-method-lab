function findMatching(drivers, string){
    const newArray = [];
    drivers.filter(name => {
    if (name.toLowerCase()  === string.toLowerCase()){
        newArray.push(name);
    }
});
return newArray;
}

function fuzzyMatch(drivers, string){
    const newArray = [];
    drivers.filter(name => {
        if (name[0] === string[0]){
            newArray.push(name);
        }
    });
    return newArray;
}

function matchName(drivers, string){
    const newArray = [];
    drivers.filter(driver => {
        if(driver.name === string){
            newArray.push(driver);
        }
    });
    return newArray;
}

