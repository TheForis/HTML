










fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
.then((response) => response.json())
.then((result) => {
    // console.log(result);
    let studentsAverageGradeHigherThan3  =  result.filter(student => student.averageGrade >= 3);
    console.log(studentsAverageGradeHigherThan3);


    let femaleStudentsGradeAverage5 = result.filter(student => student.averageGrade >= 5).filter(student => student.gender == 'Female').map(student => student.firstName);
    console.log(femaleStudentsGradeAverage5);

    let maleAdultStudentsInSkopje = result.filter(student => student.gender == 'Male').filter(student => student.age >= 18).filter(student=>student.city == 'Skopje').map(student => `${student.firstName} ${student.lastName}`);

    console.log(maleAdultStudentsInSkopje);

    let averageGradesFemaleStudentsOver24 = result.filter(student => student.gender == 'Female').filter(student => student.age >= 24).map(student => `${student.firstName} - Avg Grade:${student.averageGrade}`);

    console.log(averageGradesFemaleStudentsOver24);


    let maleStudentsThatStartWithBAvg = result.filter(student => student.firstName.includes('B')).filter(student => student.gender === 'Male' && student.averageGrade >= 2);

    console.log(maleStudentsThatStartWithBAvg);


    let femaleEmails20to30Years = result.filter(student => student.gender == 'Female' && student.age >= 20 && student.age <= 30).map(student => student.email).toSorted((a,b) => b.localeCompare(a));

    console.log(femaleEmails20to30Years);

    let studentsFullNamesAbove40 = result.filter(student => student.age >= 40).sort((a,b) => a.firstName.localeCompare(b.firstName)).map(students => students.firstName);
    console.log(studentsFullNamesAbove40);

    let studentsThatUseGoogleMail = result.filter(student => student.email.includes('google')).length;
    console.log(`There are ${studentsThatUseGoogleMail} students that use Google!`);

    let skopjeFemales = result.filter(student => student.gender === 'Female' && student.city.toLowerCase() === 'skopje');
    let averageSkopjeFemaleAge = skopjeFemales.reduce((acc,student)=> acc + student.age,0) / skopjeFemales.length;

    console.log(averageSkopjeFemaleAge);


})
.catch((Error) => {
    console.log(Error);
});

 


