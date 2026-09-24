let studentName = "Brielle";
let studentAge = 21;
let studentCourse = "Computer Science";
let operatingsystemsGrade = 92;
let artappreciationGrade = 88;
let ethicsGrade = 95;
let programmingGrade = 97;
let attendance = 96;
let passingGrade = 75;
let semester = "Second Semester";



const schoolName = "Northwest Samar State University";
const schoolYear = "2025-2026";
const maxGrade = 100;
const minGrade = 0;
const department = "Computer Studies";
const instructor = "Mr. Santos";
const subjectCount = 4;
const scholarship = true;
const campus = "Main Campus";
const country = "Philippines";




const calculateAverage = (grades) => {
    return grades.reduce((total, grade) => total + grade, 0) / grades.length;
};


const getStatus = (grade) => {
    return grade >= passingGrade ? "Passed" : "Failed";
};


const addBonus = (grade) => grade + 2;


const formatName = (name) => name.toUpperCase();


const isHighGrade = (grade) => grade >= 90;


const printSubject = (subject) => {
    console.log(`Subject: ${subject}`);
};



const grades = [
    operatingsystemsGrade,
    artappreciationGrade,
    ethicsGrade,
    programmingGrade
];

const subjects = [
    "Operating Systems",
    "Art Appreciation",
    "Ethics",
    "Programming"
];




const [firstGrade, secondGrade, thirdGrade, fourthGrade] = grades;


const [firstSubject, secondSubject, ...remainingSubjects] = subjects;


const [topGrade, , , lowestPossiblePosition] = [
    programmingGrade,
    operatingsystemsGrade,
    artappreciationGrade,
    ethicsGrade
];




const student = {
    name: studentName,
    age: studentAge,
    course: studentCourse,
    yearLevel: 2
};


const { name, age, course, yearLevel } = student;

const instructorInfo = {
    name: instructor,
    department: department,
    campus: campus
};


const {
    name: instructorName,
    department: instructorDepartment
} = instructorInfo;

const schoolInfo = {
    school: schoolName,
    year: schoolYear,
    country: country
};


const { school, year, country: schoolCountry } = schoolInfo;





const allGrades = [...grades, 98, 91];


const allSubjects = [...subjects, "Database", "Networking"];




const completeStudent = {
    ...student,
    scholarship: scholarship,
    attendance: attendance
};

const completeSchoolInfo = {
    ...schoolInfo,
    campus: campus,
    department: department
};




const adjustedGrades = grades.map((grade) => {
    return addBonus(grade);
});


const gradeDescriptions = grades.map((grade) => {
    return `${grade} - ${getStatus(grade)}`;
});





const passingGrades = grades.filter((grade) => {
    return grade >= passingGrade;
});


const excellentGrades = grades.filter((grade) => {
    return grade >= 90;
});




const studentEmail = {
    contact: {
        email: "brielle@gmail.com"
    }
};


const email = studentEmail?.contact?.email;

const studentAddress = {
    personalInfo: {
        address: {
            city: "Calbayog"
        }
    }
};


const city = studentAddress?.personalInfo?.address?.city;




const averageGrade = calculateAverage(grades);
const studentStatus = getStatus(averageGrade);
const formattedStudentName = formatName(studentName);




console.log(`1. Student Name: ${studentName}`);

console.log(`2. Age: ${studentAge}`);

console.log(`3. Course: ${studentCourse}`);

console.log(`4. School: ${schoolName}`);

console.log(`5. School Year: ${schoolYear}`);

console.log(`6. Instructor: ${instructor}`);

console.log(`7. Department: ${department}`);

console.log(`8. Average Grade: ${averageGrade.toFixed(2)}`);

console.log(`9. Student Status: ${studentStatus}`);

console.log(`10. Attendance: ${attendance}%`);

console.log(`11. Scholarship: ${scholarship ? "Yes" : "No"}`);

console.log(`12. Campus: ${campus}`);

console.log(`13. Country: ${country}`);

console.log(`14. Email: ${email}`);

console.log(`15. City: ${city}`);




console.log("\n--- SUBJECTS ---");

subjects.forEach((subject) => {
    printSubject(subject);
});




console.log("\n--- GRADES ---");

console.log(`Operating Systems: ${firstGrade}`);
console.log(`Art Appreciation: ${secondGrade}`);
console.log(`Ethics: ${thirdGrade}`);
console.log(`Programming: ${fourthGrade}`);




console.log("\n--- PASSING GRADES ---");

passingGrades.forEach((grade) => {
    console.log(`Passing Grade: ${grade}`);
});

console.log("\n--- EXCELLENT GRADES ---");

excellentGrades.forEach((grade) => {
    console.log(`Excellent Grade: ${grade}`);
});




console.log("\n--- ADJUSTED GRADES ---");

adjustedGrades.forEach((grade) => {
    console.log(`Adjusted Grade: ${grade}`);
});

console.log("\n--- GRADE DESCRIPTIONS ---");

gradeDescriptions.forEach((description) => {
    console.log(`Result: ${description}`);
});




console.log("\n================================");
console.log(`FINAL STUDENT REPORT`);
console.log(`Student: ${formattedStudentName}`);
console.log(`Course: ${course}`);
console.log(`Year Level: ${yearLevel}`);
console.log(`Average: ${averageGrade.toFixed(2)}`);
console.log(`Status: ${studentStatus}`);
console.log(`School: ${school}`);
console.log(`School Year: ${year}`);
console.log(`Location: ${schoolCountry}`);
console.log(`City: ${city}`);
console.log(`================================`);