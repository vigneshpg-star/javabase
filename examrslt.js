

var studentName = "Vignesh";
let className = "B.Tech Computer Science";
let age = 21;

const maxMaths = 100;
const maxScience = 100;
const maxEnglish = 100;


let maths = 85;
let science = 75;
let english = 90;

maths += 5;


let studentPassed = true;       // Boolean
let remarks;                    // Undefined
let optionalRemarks = null;     // Null


let totalMarks = maths + science + english;
let average = totalMarks / 3;

let maximumTotal = maxMaths + maxScience + maxEnglish;
let percentage = (totalMarks / maximumTotal) * 100;


let mathsPass = maths >= 40;
let sciencePass = science >= 40;
let englishPass = english >= 40;

let averagePass = average >= 50;


let passedAllSubjects = mathsPass && sciencePass && englishPass;

let outstanding = maths > 90 || science > 90 || english > 90;

let failedCondition = !passedAllSubjects;

studentPassed = passedAllSubjects && averagePass;


console.log("~~~ STUDENT PERFORMANCE REPORT ~~~");

console.log("Student Name:", studentName);
console.log("Class:", className);
console.log("Age:", age);

console.log("Mathematics:", maths);
console.log("Science:", science);
console.log("English:", english);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average);
console.log("Percentage:", percentage + "%");

console.log("Mathematics Passed:", mathsPass);
console.log("Science Passed:", sciencePass);
console.log("English Passed:", englishPass);

console.log("Passed All Subjects:", passedAllSubjects);
console.log("Average Above 50:", averagePass);

console.log("Final Result:", studentPassed ? "PASS" : "FAIL");

console.log("Outstanding in Any Subject:", outstanding);
console.log("Failed Condition:", failedCondition);

console.log("Remarks:", remarks);
console.log("Optional Remarks:", optionalRemarks);



