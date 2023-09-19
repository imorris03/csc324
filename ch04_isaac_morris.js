// isaac morris

// sum and range
var range = function(start, end) {
    var answer = []
    answer.push(start)
    while (answer[answer.length - 1] < end) {
       let i = answer[answer.length - 1]
       answer.push(i + 1)
    } if (answer[answer.length - 1] > end) {
       answer.pop()
       answer.push(end)
    }
    return answer;
}



var sum = function(arr) {
    while (arr.length > 1) {
        let i = arr[arr.length - 1];
        let h = arr[arr.length - 2];
        arr.splice(-2);
        arr.push(h + i);
    }
    return(arr[0]);
}

console.log(sum(range(1, 10)))

