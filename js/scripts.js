/* 
    Project Name: Palindrome Checker 
    Author: Shivam Srivastava
    Technology Used: HTML, CSS, JavaScript
*/
const input = document.querySelector(".inputs input");
const button = document.querySelector(".inputs button");
const clearBtn = document.querySelector(".inputs clearBtn");
result = document.querySelector(".info-txt");

let filterInput;
result.style.display = "block";

checkPalindrome = () => {
    let inputVal = input.value;
    let reverseInput = inputVal.split('').reverse().join('');
    if (inputVal === reverseInput) {
        result.style.display = "block";
        document.querySelector(".info-txt").innerHTML = "Yes, it is a Palindrome";
    } else {
        result.style.display = "block";
        document.querySelector(".info-txt").innerHTML = "No, it is not a Palindrome";
    }
}
button.addEventListener("click", checkPalindrome);

function clearInput() {
    input.value = "";
    result.style.display = "none"
}
clearBtn.addEventListener("click", clearInput);