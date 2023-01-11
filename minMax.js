// minimum and maximum find from array

function minMaximum(){
    var data = [10,1000,1,59.10,120,4,-1,30];

    let max = data[0], min = data[0];
    for (let i = 0; i < data.length; i++) {
        // maximum number
        if (data[i] > max) { max = data[i]; 
       }
        // minimum number
        if (data[i] < min) { min = data[i];
    }
    console.log("minimux is:",min)
    console.log("maximum is:",max)
}

minMaximum()
