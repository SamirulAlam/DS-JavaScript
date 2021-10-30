function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        var curr=arr[i]
        for(var j=i-1;j>=0 && arr[j]>curr;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=curr
    }
    return arr
}

insertionSort([23,45,12,34,22])