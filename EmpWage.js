//UC1_clear
//UC2 _//
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

//empCheck = Math.floor(Math.random() * 10) % 3;
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;

        default:
            return 0;
    }
}                                    //UC3 Function created/


function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}


let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    totalWorkingDays++;
}


let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Hours: "+totalEmpHrs+" Total Number Of Working Days: "+totalWorkingDays+" Total Emp Wage: "+empWage);

// Finding Employee Wage Array Helper Functions

let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage = totalEmpWage + dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("USING FOR EACH "+"Total Hours: "+totalEmpHrs+" Total Number Of Working Days: "+totalWorkingDays+" Total Emp Wage: "+totalEmpWage);


// by reduce function
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("USING REDUCE METHOD "+"Total Hours: "+totalEmpHrs+" Total Number Of Working Days: "+totalWorkingDays+" Total Emp Wage: "+empDailyWageArr.reduce(totalWages,0));

// UC7-B map the array
let dayCounter = 0;
function mapDayWithWage(dailyWage){
    dayCounter++;
    return dayCounter+" = "+dailyWage;
}
let empDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7-B Day and DailyWage Map");
console.log(empDayWithWageArr);

// UC7-C Days when full time wage is earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = empDayWithWageArr.filter(fullTimeWage)
console.log("UC7 - Full Day Working Array");
console.log(fullDayWageArr);

//UC7-D
console.log("UC7-D first Full time Day");
console.log(empDayWithWageArr.find(fullTimeWage));