//Task-1 Student Registration

let studentName = "DEEPAK";
let department = "ECE";
let cgpa = 8.6;

let status = cgpa >= 6 ? "Eligible" : "Not Eligible";

console.log("Student Name :", studentName);
console.log("Department :", department);
console.log("CGPA :", cgpa);
console.log("Status :", status);



//Task-2 Online Shopping Bill

let productPrice = 2500;
let quantity = 3;

let total = productPrice * quantity;

let discount = total > 5000 ? total * 0.10 : 0;

let finalPrice = total - discount;

console.log("Total :", total);
console.log("Discount :", discount);
console.log("Final Price :", finalPrice);




//Task-3 Employee Salary

let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;

let netSalary = basicSalary + bonus - tax;         

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Net Salary :", netSalary);


//Task-4 Movie Ticket Booking

let movie = "Devara";
let ticketprice = 180;
let tickets = 5;

let total = ticketprice * tickets;

console.log("MOVIE :" , movie);
console.log("TICKETS :" , tickets);
console.log("ToTAL:" , total);





 
// Task 5 – Login System

let username = "deepak";
let password ="9999";

if(username=== "deepak" && password === "9999"){
console.log("login sucess");

}else{
    console.log("Invalid Username or Password");
    
}




//Task-6 Electricity Bill

let units = 250;
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Units :", units);
console.log("Total Bill : ₹" + bill);




//Task-7 Restaurant Order

let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("First Item :", menu[0]);
console.log("Last Item :", menu[menu.length - 1]);
console.log("Total Items :", menu.length);

// Add "Fried Rice"
menu.push("Fried Rice");

// Remove "Idly"
menu.splice(1, 1);

console.log("Updated Menu :", menu);




//Task-8 Employee Object

let employee = {
    name: "DEEPAK",
    role: "Frontend Developer",
    salary: 40000
};

console.log("Employee Name :", employee.name);
console.log("Role :", employee.role);
console.log("Salary :", employee.salary);




// Task 9 – Product Inventory

let products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "CPU",
    "Speaker"
];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1), products[i]);
}



// Task 10 – Function

function calculateArea(length, width) {
    let area = length * width;
    console.log("Area =", area);
}

calculateArea(20, 10);




// Task 11 – Bank Deposit

let balance = 5000;

function deposit(amount) {
    balance = balance + amount;
}

function withdraw(amount) {
    balance = balance - amount;
}

console.log("Current Balance :", balance);

deposit(2000);
console.log("After Deposit :", balance);

withdraw(1000);
console.log("After Withdraw :", balance);

console.log("Final Balance :", balance);




// Task 12 – Callback Function

function addition(a, b) {
    return a + b;
}

function calculate(callback, num1, num2) {
    console.log(callback(num1, num2));
    console.log("Calculation Completed");
}

calculate(addition, 10, 20);




// Task 13 – Generator Function

function* couponCodes() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let coupons = couponCodes();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);




// Task 14 – Currying

function discount(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(discount(10)(20)(30));




// Task 15 – Spread Operator

let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack);




// Task 16 – Rest Operator

function sum(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log(total);
}

sum(10, 20, 30, 40, 50);





// Task 17 – Array Destructuring

let colors = ["Red", "Blue", "Green", "Yellow"];

let [color1, color2, color3, color4] = colors;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);




// Task 18 – Object Destructuring

let user = {
    name: "Navi",
    city: "Salem",
    role: "Developer"
};

let { name, city, role } = user;

console.log(name);
console.log(city);
console.log(role);




// Task 19 – Shopping Cart

let cart = ["Mobile", "Laptop", "Watch"];

console.log(cart);

cart.push("Headphones");
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

cart.unshift("Tablet");
console.log(cart);




// Task 20 – Product Search

let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];

if (products.includes("Monitor")) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}