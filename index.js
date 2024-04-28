// from Mam Faiza 
//=======Q1====== 
// const str = prompt("Enter any string")

// function Palindrom(str) {
//     const lowercasestr = str.toLowerCase()
//     let newStr = ""
//     let fwdStr = ""
//     let bkwStr = ""
//     let result = ""
//     for (let i = 0; i < lowercasestr.length; i++) {
//         if ((lowercasestr[i].charCodeAt() >= "97") && (lowercasestr[i].charCodeAt() <= "122")) {
//             newStr += lowercasestr[i]
//         }
//     }
//     for (let i = 0; i < newStr.length; i++) {
//         fwdStr += newStr[i]
//     }
//     for (let i = newStr.length - 1; i >= 0; i--) {
//         bkwStr += newStr[i]
//     }
//     if (fwdStr === bkwStr) {
//         result += "it is palindrom"
//     } else {
//         result += "it is not palindrom"
//     }
//     return result
// }

// const palindromStr = Palindrom(str)
// console.log("🚀 ~ palindromStr:", palindromStr)



// =====Q3====

// const arr = [5, 1000000001, 1000000002, 1000000003, 1000000004 , 1000000005] 
// const newArr = arr.reduce((acc, item) => acc + item)
// console.log("🚀 ~ newArr:", newArr)




// =======================Test 2 =========================

// ============Q3========= //

// function reversedstring(str){
//  var revstr = str.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         revstr[i] = revstr[i].split("").reverse().join("");
//     }
//     var reversedStr = revstr.join(" ");
//     console.log("🚀 ~ reversedstring ~ reversedStr:", reversedStr)
// }

// var str = prompt("Enter any string")
// reversedstring(str)

// ==========Q4===== //

function objdisplay(library) {
    library.forEach(element => {
        const card = document.getElementById("book")
        card.innerHTML += `<h1>${element.author}</h1>
        <h2>${element.title}</h2>
        <h2>${element.readingStatus ? "already read" : "not read yet"}</h2>`

    });
}
var library = [
    { author: "Bill Gates", title: 'The Road Ahead', readingStatus: true },
    { author: "Steve Jobs", title: 'walter isaacsoon', readingStatus: true },
    { author: "Suzanne Collins", title: 'Mockingjay', readingStatus: false },
]
objdisplay(library)

// ====== Q5 ======== //

function converttoCoins(amount, coins) {
    coins.sort((a, b) => b - a);
    const result = [];
    for (let i = 0; i < coins.length; i++) {
        const numCoins = Math.floor(amount / coins[i]);
        for (let j = 0; j < numCoins; j++) {
            result.push(coins[i]);
        }
        amount %= coins[i];
    }
    return result;
}
console.log(converttoCoins(48, [25, 5, 5, 10]))

// ==== Q2 ==== //

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get(comp), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
const result = twoSum([2, 7, 11, 15], 9)
console.log("🚀 ~ result:", result)

//  ======Q1 ======
function maxProductSubarray(nums) {
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }

        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);
        result = Math.max(result, maxProduct);
    }

    return result;
}

const nums1 = [2, 3, -2, 4];
console.log(maxProductSubarray(nums1));