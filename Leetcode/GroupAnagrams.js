/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let hash = {}
    for(let str in strs){
        let key = strs[str].split("").sort().join("");
        if(hash[key]){
            hash[key].push(strs[str])
        }else{
            hash[key] = [strs[str]]
        }
    }
    return Object.values(hash)
}

// var groupAnagrams = function(strs) {
//     let groupedAnagrams = [[strs[0]]];
//     let mockArr = [strs[0]]
//     for(let i=1; i<strs.length;i++){
//         let isValidAnagram = false
//         for(let j=0;j<mockArr.length;j++){
//             isValidAnagram = validAnagram(strs[i], mockArr[j])
//             if(isValidAnagram){
//                 groupedAnagrams[j].push(strs[i]);
//                 break;
//             }
//         }
//         if(!isValidAnagram){
//             mockArr.push(strs[i])
//             groupedAnagrams.push([strs[i]]);
//         }
        
//     }
//     return groupedAnagrams;
// };

// function validAnagram(s,t){
//     if(s.length !== t.length) return false;
//     let hashS = {}
//     for(let i=0;i<s.length;i++){
//         hashS[s[i]] = hashS[s[i]] ? hashS[s[i]] +1 : 1
//     }
//     for(let i=0;i<t.length;i++){
//         if(hashS[t[i]]){
//             --hashS[t[i]];
//         }else{
//             return false;
//         }
//     }
//     for (let key in hashS) {
//         if (hashS[key] !== 0) return false;
//     }
//     return true
// }