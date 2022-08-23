const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

for(let employee of employees){
  console.log(bonusCalc(employee));
}

function bonusCalc(employee){
  bonusParameter1(employee);
  bonusParameter2(employee);
  bonusParameter3(employee);
  bonusParameter4();
  let employeeBonusStuff = {
    employeeName: employee.name,
    bonusPercentage: bonusPercentage*100,
    totalBonus: bonusPercentage * employee.annualSalary,
    totalCompensation: Number(bonusPercentage * employee.annualSalary) + Number(employee.annualSalary)
  }
  return employeeBonusStuff;
}

function bonusParameter1(employee){
  if(employee.reviewRating <= 2){
    bonusPercentage = 0;
  }
  else if(employee.reviewRating === 3){
    bonusPercentage = .04;
  }
  else if(employee.reviewRating === 4){
    bonusPercentage = .06;
  }
  else if(employee.reviewRating === 5){
  bonusPercentage = .1;
  }
  return bonusPercentage;
}

function bonusParameter2(employee){
  if(employee.employeeNumber.length === 4){
    bonusPercentage += .05;
  }
  return bonusPercentage;
}

function bonusParameter3(employee){
  if(employee.annualSalary > '65000'){
    bonusPercentage -= .01;
  }
  return bonusPercentage;
}

function bonusParameter4(){
  if(bonusPercentage > .13){
    bonusPercentage = .13;
  }
  else if(bonusPercentage < 0){
    bonusPercentage = 0;
  }
  return bonusPercentage;
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log( employees );
