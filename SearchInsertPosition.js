var searchInsert = function(nums, target) {
    let numIndex = binarySearch(nums, target);
    if(numIndex >= 0){
        return numIndex;
    }else{
        return insertNumber(nums,target);
    }
};

function insertNumber(nums,target){
    let left = 0;
    let right = nums.length -1;
    if(target > nums[nums.length-1]){
        return nums.length;
    }else if(target < nums[0]){
        return 0;
    }
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(left == right-1){
            return right;
        }
        if(target < nums[mid]){
            right = mid;
        }else{
            left = mid;
        }
    }
    
}

function binarySearch(nums, target){
    let left = 0;
    let right = nums.length -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] < target){
            left = mid+1;
        }else{
            right = mid-1;
        }   
    }
    return -1;
}
