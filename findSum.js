const nums1 = [2,7,11,15]
const target1 = 9

const nums2 = [3,3]
const target2 = 6

const nums3 = [3,2,4]
const target3 = 6

function twoSum (nums, target) {
    let newArr = []
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                newArr.push(i, j);
            }
        }
    }
    console.log(newArr)
    return newArr
}

twoSum(nums1, target1)
twoSum(nums2, target2)
twoSum(nums3, target3)