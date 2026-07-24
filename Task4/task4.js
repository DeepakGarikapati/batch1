//Task-1 Student Registration Form

let studentName = "Deepak";
let age = 20;
// let department = "ECE";
let cgpa = 7.85;

console.log("Student Name:", studentName);
console.log("Age:", age);
// console.log("Department:", department);
console.log("CGPA:", cgpa);



//Task-2 Employee Details

let employee = {
    employeeId: "EMP101",
    employeeName: "Rahul",
    department: "IT",
    salary: 50000
};

console.log("Employee Name:", employee.employeeName);
console.log("Salary:", employee.salary);



//Task-3 Shopping Cart

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Number of Products:", products.length);



 //Task-4 Student Marks

let english = 85;
let reasoning = 90;
let maths = 78;
let history = 88;
let computer = 95;

let total = english + reasoning + maths + history + computer;
let average = total / 5;

console.log("Total Marks:", total);
console.log("Average Marks:", average);




// Task-5 Age checker

var age = 17
if(age>=18) {  
console.log("eligible");

}else{
    console.log("not eligible");
    
}



//Task-6 Login System

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}



//Task-7 Calculator

let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);



//Task-8 Electricity Bill

let customerName = "Rahul";
let units = 150;
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Customer Name:", customerName);
console.log("Units:", units);
console.log("Bill Amount: ₹" + bill);



//Task-9 Employee Salary

let basicSalary = 30000;
let bonus = 5000;

let grossSalary = basicSalary + bonus;

console.log("Gross Salary:", grossSalary);



//Task-10 Movie Ticket Price

let ticketPrice = 200;
let numberOfTickets = 4;

let totalAmount = ticketPrice * numberOfTickets;

console.log("Ticket Price:", ticketPrice);
console.log("Number of Tickets:", numberOfTickets);
console.log("Total Amount:", totalAmount);




// Task 11: Product Discount

let productName = "Laptop";
let price = 60000;
let discount;
let finalPrice;

if (price > 5000) {
    discount = price * 20 / 100;
} else {
    discount = price * 10 / 100;
}

finalPrice = price - discount;

console.log("Product Name:", productName);
console.log("Original Price: ₹" + price);
console.log("Discount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);



// Task 12: Function Practice

function studentDetails(name, department, cgpa) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}

studentDetails("Deepak", "Computer Science", 8.9);       




// Task 13: Bank Balance

let accountHolder = "Deepak";
let currentBalance = 100000;
let withdrawAmount = 12000;

let remainingBalance = currentBalance - withdrawAmount;

console.log("Account Holder:", accountHolder);
console.log("Current Balance:", currentBalance);
console.log("Withdraw Amount:", withdrawAmount);
console.log("Remaining Balance:", remainingBalance);



// Task 14: Mobile Recharge

let mobileNumber = "9977664565";
let rechargeAmount = 299;

console.log("Mobile Number:", mobileNumber);
console.log("Recharge Amount: ₹" + rechargeAmount);
console.log("Recharge Successful");




// Task 15: Restaurant Bill

let foodName = "Biryani";
let quantity = 2;
let price = 250;

let totalBill = quantity * price;

console.log("------ Restaurant Invoice ------");
console.log("Food Name:", foodName);
console.log("Quantity:", quantity);
console.log("Price per Item: ₹" + price);
console.log("Total Bill: ₹" + totalBill);




// MINI PROJECT

// Employee Management System

let name = "Deepak";
let department = "Developer";
let salary = 30000;
let bonus = 5000;
let experience = 2;

let skills = ["HTML", "CSS", "JavaScript"];

let employee = {
    name: name,
    department: department,
    salary: salary
};

function details() {
    console.log("Name:", employee.name);
    console.log("Department:", employee.department);
    console.log("Salary:", employee.salary);
    console.log("Skills:", skills);
}

function totalSalary() {
    console.log("Total Salary:", salary + bonus);
}

function checkExperience() {
    if (experience >= 5) {
        console.log("Experienced Employee");
    } else {
        console.log("Fresher Employee");
    }
}

details();
totalSalary();
checkExperience();
