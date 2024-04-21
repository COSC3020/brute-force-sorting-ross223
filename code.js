function permutationSort(arr) {
    var iterations = 0;
    if (arr.length == 0) {
        return iterations;
    }
    function permutation(arr, first) {
        for (first; first < arr.length; first++) {
            for (var second = first; second < arr.length; second++) {
                console.log(arr);
                iterations++;
                [arr[first], arr[second]] = [arr[second], arr[first]];
                permutation(arr, first + 1);
                if (check(arr) == true) {
                    return iterations;
                }
                [arr[second], arr[first]] = [arr[first], arr[second]];
            }
        }
    }
    permutation(arr, 0);
    return iterations;
}

function check(arr){
   for (var i = 0; i < arr.length; i++){
        if (arr[i] < arr[i-1]){
            return false;
        }
    }
    return true;
}

console.log(permutationSort([2, 0, 1]));
