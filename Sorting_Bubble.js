const swapElem=(arr,id1,id2)=>{
    [arr[id1],arr[id2]]=[arr[id2],arr[id1]]
}

function bubbleSort(arr){
    var noSwaps
    for(let i=arr.length;i>0;i--){
        noSwaps=true
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
               swapElem(arr,j,j+1)
               noSwaps=false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

bubbleSort([23,45,12,4])