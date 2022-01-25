`use strict`;

function Employeedata(employeeId, fullName, department, level, Salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./images/${this.fullName}.PNG`;  //path of employee image depend on his name

}


Employeedata.prototype.Salary = function getRndInteger(min, max)  {
    var level = this.level;

    if (level == "Junior") {
        var min = 500;
        var max = 1000;

    } if (level == "Mid-Senior") {
        var min = 1000;
        var max = 1500;

    } else if (level == "Senior") {
        var min = 1500;
        var max = 2000;
    }
    return Math.floor(Math.random() * (max - min +1 )) + min;
}

Employeedata.prototype.salaryFinal = function () {

    document.write(`<p> The employee  ${this.fullName} and his/her salary is ${this.Salary() - this.Salary() * 0.0075} </p> `);

}

const Ghazi = new Employeedata('1000', ' Ghazi Samer', `Administration`, `Senior`);
Ghazi.salaryFinal();


const Lana = new Employeedata('1001', ' Lana Ali', `Finance`, `Senior`);
Lana.salaryFinal();

const Tamara = new Employeedata('1002', ' Tamara Ayoub	', `Marketing`, `Senior`);
Tamara.salaryFinal();

const Safi = new Employeedata('1003', ' Safi Walid', `Administration`, `Mid-Senior`);
Safi.salaryFinal();


const Omar = new Employeedata('1004', ' Omar Zaid	', `Development	`, `Senior`);
Omar.salaryFinal();


const Rana = new Employeedata('1005', ' Rana Saleh', `Development`, `Junior`);
Rana.salaryFinal();


const Hadi = new Employeedata('1006', ' Hadi Ahmad', `Finance`, `Mid-Senior`);
Hadi.salaryFinal();


