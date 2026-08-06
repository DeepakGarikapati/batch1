// //-----------PROJECT------------------
// 
// 
// ===============================
// LIFE TIMELINE SIMULATOR
// ===============================

// Enter your Date of Birth
let dob = new Date("2004-09-10"); // Change your DOB here

// Current Date
let today = new Date();

// Difference in milliseconds
let diff = today - dob;

// Calculations
let seconds = Math.floor(diff / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let weeks = Math.floor(days / 7);

let age = today.getFullYear() - dob.getFullYear();

if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() &&
        today.getDate() < dob.getDate())
) {
    age--;
}

// Next Birthday
let nextBirthday = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate()
);

if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
}

let birthdayDays = Math.ceil(
    (nextBirthday - today) / (1000 * 60 * 60 * 24)
);

// Heartbeat
let heartbeat = minutes * 72;

// Sleep
let sleepHours = Math.floor(days * 8);
let sleepYears = (sleepHours / 24 / 365).toFixed(2);

// Week Progress
let dayOfWeek = today.getDay();
let weekProgress = ((dayOfWeek + 1) / 7 * 100).toFixed(0);

// Month Progress
let totalDaysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
).getDate();

let monthProgress = (
    (today.getDate() / totalDaysInMonth) * 100
).toFixed(0);

// Year Progress
let startYear = new Date(today.getFullYear(), 0, 1);
let endYear = new Date(today.getFullYear(), 11, 31);

let yearProgress = (
    ((today - startYear) / (endYear - startYear)) * 100
).toFixed(0);

// Planet Age
let mercury = (age / 0.24).toFixed(1);
let venus = (age / 0.62).toFixed(1);
let mars = (age / 1.88).toFixed(1);
let jupiter = (age / 11.86).toFixed(1);

// Quotes
let quotes = [
    "Never stop learning.",
    "Every day is a new opportunity.",
    "Small progress is still progress.",
    "Dream big. Start small.",
    "Success comes from consistency."
];

let quote = quotes[today.getDate() % quotes.length];

// Output
console.log("====================================");
console.log("        LIFE TIMELINE REPORT");
console.log("====================================");

console.log("Today's Date :", today.toDateString());
console.log("Born On      :", dob.toDateString());

console.log("------------------------------------");

console.log("Age          :", age, "Years");
console.log("Days Lived   :", days);
console.log("Weeks Lived  :", weeks);
console.log("Hours Lived  :", hours);
console.log("Minutes      :", minutes);
console.log("Seconds      :", seconds);

console.log("------------------------------------");

console.log("Next Birthday In :", birthdayDays, "Days");

console.log("Week Progress :", weekProgress + "%");
console.log("Month Progress:", monthProgress + "%");
console.log("Year Progress :", yearProgress + "%");

console.log("------------------------------------");

console.log("Estimated Heartbeats :", heartbeat);
console.log("Estimated Sleep Years:", sleepYears);

console.log("------------------------------------");

console.log("Planet Age");
console.log("Mercury :", mercury, "Years");
console.log("Venus   :", venus, "Years");
console.log("Mars    :", mars, "Years");
console.log("Jupiter :", jupiter, "Years");

console.log("------------------------------------");

console.log("Today's Quote:");
console.log(quote);

console.log("====================================");



//SOME MORE EXAMPLES


// TASK-Meeting Rescheduler

let meeting = new Date("2026-08-10");

console.log("Old Meeting:", meeting.toDateString());

meeting.setDate(meeting.getDate() + 7);

console.log("New Meeting:", meeting.toDateString());




// TASK2-Birthday Next Year

let birthday = new Date("2004-09-10");

birthday.setFullYear(2027);

console.log(birthday.toDateString());



// TASK3-Vacation Extended

let vacation = new Date("2026-06-15");

console.log("Before:", vacation.toDateString());

vacation.setMonth(vacation.getMonth() + 1);

console.log("After :", vacation.toDateString());




//TASK4-Alarm After 2 Hours

let alarm = new Date();

console.log("Current:", alarm.toLocaleTimeString());

alarm.setHours(alarm.getHours() + 2);

console.log("Alarm :", alarm.toLocaleTimeString());




// TASK5-Pizza Delivery Delay

let delivery = new Date();

console.log("Expected:", delivery.toLocaleTimeString());

delivery.setMinutes(delivery.getMinutes() + 30);

console.log("Delayed :", delivery.toLocaleTimeString());




//TASK6-🎬 Movie Starts in 45 Seconds

let movie = new Date();

console.log("Current:", movie.toLocaleTimeString());

movie.setSeconds(movie.getSeconds() + 45);

console.log("Movie Starts:", movie.toLocaleTimeString());



//TASK7- 📚 Assignment Deadline Extended
let deadline = new Date("2026-08-20");

console.log("Old Deadline:", deadline.toDateString());

deadline.setDate(deadline.getDate() + 3);

console.log("New Deadline:", deadline.toDateString());



//TASK8-Rocket Launch Postponed

let launch = new Date("2026-12-25");

console.log("Original:", launch.toDateString());

launch.setDate(launch.getDate() + 15);

console.log("Postponed:", launch.toDateString());



//TASK9-Salary Date Changed

let salary = new Date("2026-08-31");

console.log("Salary Date:", salary.toDateString());

salary.setDate(5);

console.log("New Salary Date:", salary.toDateString());




// TASK10- Next Monday Finder

let today = new Date();

let day = today.getDay();

let daysToMonday = (8 - day) % 7;

if (daysToMonday === 0) {
    daysToMonday = 7;
}

today.setDate(today.getDate() + daysToMonday);

console.log("Next Monday:", today.toDateString());