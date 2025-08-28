function rotateArrayByOne(nums) {
        let first = nums[0];
        for(let i=0; i<=nums.length-1;i++){
            nums[i] = nums[i+1];
        }
        nums[nums.length-1] = first;
    }
rotateArrayByOne([1,2,3,4,5])