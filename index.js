// Your code here
function mapToNegativize(sourceArray) {
    let nums = [];
    for (let i = 0; i < sourceArray.length; i++) {
        nums.push(-1 * sourceArray[i])
    }
    return nums;
}

function mapToNoChange(sourceArray) {
    let nums = [];
    for (let i = 0; i < sourceArray.length; i++) {
        nums.push(sourceArray[i])
    }
    return nums;
}

function mapToDouble(sourceArray) {
    let nums = [];
    for (let i = 0; i < sourceArray.length; i++) {
        nums.push(2 * sourceArray[i])
    }
    return nums;
}

function mapToSquare(sourceArray) {
    let nums = [];
    for (let i = 0; i < sourceArray.length; i++) {
        nums.push(sourceArray[i] * sourceArray[i])
    }
    return nums;
}

function reduceToTotal(sourceArray, startPoint = 0) {
    let total = startPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i];
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false;
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true;
    }
    return false;
}