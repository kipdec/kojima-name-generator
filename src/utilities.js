function roll(numOfSides){
    return Math.floor(Math.random() * numOfSides) + 1;
}

export { roll };