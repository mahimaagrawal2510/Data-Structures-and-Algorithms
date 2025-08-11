function linearSearch(num=0, arr=[]){
    for(let i=0; i<arr.length;i++){
        if(arr[i] == num){
            return i
        }
    }
    return "Element not found"
}
linearSearch(42, [15,5,20,35,2,42,67,17])