const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  
  // Task 1: find all female name
  //["Rutika kadam", "Priyadharsini"];
  
  //Task 2: Starting with 'A'
  //["Adhi", "Ahamed"];
  
  // Task 3: Count the no. of males
  // 2
   let femalename=students.filter(students=>students.gender=="female")
  console.log(femalename)
  
  let male=students.filter(students=>students.gender=="male")
  console.log(male.length);
  
  //console.log(students.name.startswith("A"))
  
  