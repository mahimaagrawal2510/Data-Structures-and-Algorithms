//array should be sorted

function binarySearch(num=0, arr=[]){
    let left = 0;
    let right = arr.length-1;
   
    while(left<=right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] == num){
            return "Element found at " + mid + " index";
        }
        else if(arr[mid] > num){
            right = mid-1;
        }else if(arr[mid] < num){
            left = mid+1;
        }
    }
    return "Element not found";
}
binarySearch(59, [5,9,17,23,25,45,59,63,71,89]);

//Time compexity - O(log n)
//Space complexity - O(1)