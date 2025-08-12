function bubbleSort(nums){
    let swapped;
    for(let i=0;i<nums.length-1;i++){
        swapped = false;
        for(j=0;j<nums.length-1-i;j++){
            if(nums[j] > nums[j+1]){
                swapped = true;
                let x = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = x;
            }
        }
        //if no swapping is happening means array is now sorted
        if(!swapped) break;
    }
    return nums
}

bubbleSort([15,16,6,8,5])