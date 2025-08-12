function selectionSort(nums){

    for(let i=0; i<nums.length-1; i++){
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min]= temp;
        }
        
    }
    return nums
}

selectionSort([7,4,10,8,3,1]);
//Time complexity: 0(n^2)
//Space complexity: O(1)