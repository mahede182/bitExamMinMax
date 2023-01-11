// minimum and maximum find from array

function minMaximum(){
    var data = [10,1000,1,59.10,120,4,-1,30];

    // we can use js built in Math()
    
    var min = Math.min(...data)
    var max = Math.max(...data)

    console.log("minimux is:",min)
    console.log("maximum is:",max)
}

minMaximum()