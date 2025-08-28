/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => b-a)[k-1]
};

findKthLargest([3,2,1,5,6,4])