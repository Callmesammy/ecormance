const Imageges ={
    1: require('./1.png'),
    2: require('./2.png'),
    3: require('./3.png'),
    4: require('./4.png'),
    5: require('./5.png'),
    6: require('./6.png'),
    7: require('./7.png'),
    8: require('./8.png'),
    9: require('./9.png'),
    10: require('./10.png'),
    11: require('./11.png'),
    12: require('./12.png'),
}

// randomImages is an array of image file names
export const randomImages = () => {
    const randomImage = Math.floor(Math.random() * 12) + 1;
    return Imageges[randomImage];
}