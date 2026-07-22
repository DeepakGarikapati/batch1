// Task 1: Employee Login System

// let username = prompt("Enter Username:");
// let password = prompt("Enter Password:");

// if (username === "deepak" && password === "12345") {
    // console.log("Login Successful");
    // alert("Login Successful");
// } else {
    // console.log("Invalid Username or Password");
    // alert("Invalid Username or Password");
// }

// Task 2: E-Commerce Discount

let amount = 6500;
let finalAmount;

if (amount >= 5000) {
    let discount = amount * 0.20; // 20% discount
    finalAmount = amount - discount;

    console.log("20% Discount Applied");
    console.log("Discount Amount: ₹" + discount);
    console.log("Final Amount: ₹" + finalAmount);
} else {
    finalAmount = amount;

    console.log("No Discount");
    console.log("Final Amount: ₹" + finalAmount);
}

// Task 3: ATM Withdrawal

let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {
    balance -= withdraw;

    console.log("Transaction Successful");
    console.log("Withdraw Amount: ₹" + withdraw);
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Balance");
}

// Task 4: Student Grade System

let mark = 87;

if (mark >= 90) {
    console.log("Grade A");
} 
else if (mark >= 80) {
    console.log("Grade B");
} 
else if (mark >= 70) {
    console.log("Grade C");
} 
else {
    console.log("Fail");
}

// Task 5: Traffic Signal

let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid");
}

// Task 6: Online Shopping Delivery Charge

let orderAmount = 750;
let deliveryCharge;
let total;

if (orderAmount >= 1000) {
    deliveryCharge = 0;
} else {
    deliveryCharge = 80;
}

total = orderAmount + deliveryCharge;

console.log("Order Amount : ₹" + orderAmount);
console.log("Delivery : ₹" + deliveryCharge);
console.log("Total : ₹" + total);

// Task 7: User Age Verification

let age = Number(prompt("Enter Your Age:"));

if (age >= 18) {
    alert("Eligible");
    console.log("Eligible");
} else {
    alert("Not Eligible");
    console.log("Not Eligible");
}

//Task:8 Find Largest Among 3 Numbers

let a = 10;
let b = 20;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest Number:", a);
} else if (b >= a && b >= c) {
    console.log("Largest Number:", b);
} else {
    console.log("Largest Number:", c);
}

// Task 9: Mobile Password

let pin = "1234";

if (pin.length === 4) {
    if (pin === "1234") {
        console.log("Login Success");
    } else {
        console.log("Incorrect PIN");
    }
} else {
    console.log("Invalid PIN");
}

// Task 10: Product Stock

let stock = 0;

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}

// Task 11: Employee Salary Bonus

let salary = 45000;
let bonus;

if (salary > 50000) {
    bonus = 10000;
} else if (salary > 30000) {
    bonus = 5000;
} else {
    bonus = 2000;
}

console.log("Salary:", salary);
console.log("Bonus:", bonus);

// Task 12: Electricity Bill

let units = 150;
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
} else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Units:", units);
console.log("Total Bill: ₹" + bill);

// Task 13: Movie Ticket Booking

let age = 20;

if (age < 5) {
    console.log("Ticket Price: Free");
} else if (age <= 18) {
    console.log("Ticket Price: ₹100");
} else {
    console.log("Ticket Price: ₹200");
}

// Task 14: Hospital Token System

let category = "Senior Citizen";

switch (category) {
    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid Category");
}

// Task 15: Company Attendance

let status = "Present";

switch (status) {
    case "Present":
        console.log("Working");
        break;

    case "Leave":
        console.log("Leave Approved");
        break;

    case "Absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid Status");
}

// Task 16: Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;

if (total > 1000) {
    total = total - (total * 10 / 100);
    console.log("10% Discount Applied");
}

console.log("Final Total: ₹" + total);

// Task 17: Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + " " + products[i]);
}

// Task 18: Employee Database

let employee = {
    name: "DEEPAK",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(employee[key]);
}

// Task 19: Type Casting

let num = Number("100");
let bool = Boolean("true");
let str = String(200);

console.log(num);
console.log(bool);
console.log(str);

// Task 20: Banking Menu

let choice = 2;

switch (choice) {
    case 1:
        console.log("Deposit");
        break;

    case 2:
        console.log("Withdraw");
        break;

    case 3:
        console.log("Balance");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}

// Employee Management System

let employee = {
    name: "Rahul",
    role: "Developer",
    salary: 50000,
    attendance: "Present"
};

let choice = 5;

switch (choice) {

    case 1:
        console.log("Employee Added");
        break;

    case 2:
        console.log("Name:", employee.name);
        console.log("Role:", employee.role);
        console.log("Salary:", employee.salary);
        break;

    case 3:
        let bonus = 0;

        if (employee.salary > 50000) {
            bonus = 10000;
        } else if (employee.salary > 30000) {
            bonus = 5000;
        } else {
            bonus = 2000;
        }

        console.log("Bonus:", bonus);
        break;

    case 4:
        console.log("Attendance:", employee.attendance);
        break;

    case 5:
        console.log("Salary:", employee.salary);
        break;

    case 6:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}