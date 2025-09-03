// PART 1: Variables and Conditionals
let score = 75;
let message;

if (score >= 60) {
  message = "Pass";
} else {
  message = "Fail";
}
document.getElementById("output").textContent = message;

// PART 2: Two Custom Functions
function greet(name) {
  return "Hello, " + name + "!";
}

function showMultiples(num) {
  let result = "";
  for (let i = 1; i <= 3; i++) {
    result += num * i + " ";
  }
  return result;
}

// PART 3: Two Loops (for loop used above, adding while loop)
let count = 0;
while (count < 2) {
  console.log("Loop iteration:", count);
  count++;
}

// PART 4: Three DOM Interactions

// 1. Update text content on load
document.getElementById("output").textContent = greet("vee");

// 2. Button 1: Show multiples of 5
document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("output").textContent = showMultiples(5);
});

// 3. Button 2: Create a list of 3 items
document.getElementById("btn2").addEventListener("click", function () {
  const list = document.getElementById("list");
  list.innerHTML = ""; // Clear list first
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
  }
});