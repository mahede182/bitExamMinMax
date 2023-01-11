// minimum and maximum find from array

function minMaximum(){
    var data = [10,1000,1,59.10,120,4,-1,30];

    let max = array[0], min = array[0];
    for (let i = 0; i < array.length; i++) {
        // larger number
        if (array[i] > max) { max = array[i]; }
        // smaller number
        if (array[i] < min) { min = array[i]; }
    console.log("minimux is:",min)
    console.log("maximum is:",max)
}

minMaximum()
