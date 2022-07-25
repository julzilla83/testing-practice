function analyzeArray(numArray){
    return {
        average: (numArray.reduce((total,curr)=>total+curr))/numArray.length,
        min: Math.min(...numArray),
        max: Math.max(...numArray),
        length: numArray.length
    }
}
// const object = analyzeArray([1,8,3,4,2,6]);

module.exports = analyzeArray;