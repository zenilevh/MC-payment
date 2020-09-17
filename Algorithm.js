function TwoSums(arr, target) {
    if (arr.length < 1) {
        return "Wrong input, should be an array"
    }
    if (!target || target < 1) {
        return "Wrong input Target"
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let temp = arr[i] + arr[j]
            if (temp === target) {
                return [i, j]
            }
        }
    }
}


console.log(TwoSums([3, 3], -6))