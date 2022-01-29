`use strict`;

// function Employeedata(employeeId, fullName, department, level, Salary) {
//     this.employeeId = employeeId;
//     this.fullName = fullName;
//     this.department = department;
//     this.level = level;
//     this.imageUrl = `./images/${this.fullName}.PNG`;  //path of employee image depend on his name

// }


// Employeedata.prototype.Salary = function getRndInteger(min, max) {
//     var level = this.level;

//     if (level == "Junior") {
//         var min = 500;
//         var max = 1000;

//     } if (level == "Mid-Senior") {
//         var min = 1000;
//         var max = 1500;

//     } else if (level == "Senior") {
//         var min = 1500;
//         var max = 2000;
//     }
//     return Math.floor(Math.random() * (max - min + 1)) + min;


// Employeedata.prototype.salaryFinal = function () {

//     document.write(`<p> The employee  ${this.fullName} and his/her salary is ${this.Salary() - this.Salary() * 0.0075} </p> `);

// }

// const Ghazi = new Employeedata('1000', ' Ghazi Samer', `Administration`, `Senior`);
// Ghazi.salaryFinal();


// const Lana = new Employeedata('1001', ' Lana Ali', `Finance`, `Senior`);
// Lana.salaryFinal();

// const Tamara = new Employeedata('1002', ' Tamara Ayoub	', `Marketing`, `Senior`);
// Tamara.salaryFinal();

// const Safi = new Employeedata('1003', ' Safi Walid', `Administration`, `Mid-Senior`);
// Safi.salaryFinal();


// const Omar = new Employeedata('1004', ' Omar Zaid	', `Development	`, `Senior`);
// Omar.salaryFinal();


// const Rana = new Employeedata('1005', ' Rana Saleh', `Development`, `Junior`);
// Rana.salaryFinal();


// const Hadi = new Employeedata('1006', ' Hadi Ahmad', `Finance`, `Mid-Senior`);
// Hadi.salaryFinal();

let employeeeForm = document.getElementById('employeeForm');
let dataSection = document.getElementById('data')
let mainn= document.getElementById("main")

function Employeedata(fullName, employeeId, department, level) {
    this.name = fullName;
    this.employeeId = employeeId;
    this.department = department;
    this.level = level;
    this.imageUrl = `/image.jpg/${this.name}.jpg`;
    //  `./images/${this.fullName}.PNG`;  path of employee image depend on his name

}


let h1 = document.createElement(`h1`);
mainn.appendChild(h1);
h1.textContent = `Employee Data : `

Employeedata.prototype.render = function () {


    // document.write(`<p>Name: ${this.name}   -ID: ${randomIdnum()}</p>`);
    // document.write(`<p> Department: ${this.department}     level: ${this.level}</p>`);

    // document.write(`<p> ${this.Salary() - this.Salary() * 0.0075}</p> `);


    let img = document.createElement('img');
    img.setAttribute('src', `${this.imageUrl}`);
    // img.setAttribute('alt',this.name);
    mainn.appendChild(img);

    let p1 = document.createElement('p');
    mainn.appendChild(p1);
    p1.textContent =   `Name: ${this.name}  -ID: ${randomIdnum()}` ;

    let p2 = document.createElement('p');
    mainn.appendChild(p2);
    p2.textContent = `Department: ${this.department}     level: ${this.level}` ;

    let p3 = document.createElement('p');
    mainn.appendChild(p3);
    p3.textContent = ` ${this.Salary() - this.Salary() * 0.0075}   ` ;

      


    // let img = document.createElement('img');
    // img.setAttribute('src', `${this.imageUrl}`);
    // // img.setAttribute('alt',this.name);
    // mainn.appendChild(img);

}

function randomIdnum() {
    return Math.floor(Math.random() * 10000);

}




Employeedata.prototype.Salary = function () {
    var level = this.level;

    if (level == "Junior") {
        var min = 500;
        var max = 1000;

    } if (level == "Mid-Senior") {
        var min = 1000;
        var max = 1500;

    } else if (level == "Senior") {
        var min = 1500;
        var max = 200000;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function handelSubmit(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    // let imageUrl = event.target.imageUrl.imageUrl;
    // console.log(`${this.fullName}  ${this.department}   ${this.level}  ${this.imageUrl}`);

    let newdata = new Employeedata(name, randomIdnum(), department, level,);
    newdata.render()

}

employeeeForm.addEventListener('submit', handelSubmit);






let Ghazi = new Employeedata(`Ghazi Samer`, randomIdnum(), `Administration`, `Senior` );
Ghazi.render(); 
let Lana = new Employeedata(`Lana Ali`, randomIdnum(), `Finance`, `Senior`);
Lana.render();
let Tamara = new Employeedata(`Tamara Ayoub`, randomIdnum(), `Marketing`, `Senior`);
Tamara.render();
let Safi = new Employeedata(`Safi Walid`, randomIdnum(), `Administration`, `Mid-Senior`);
Safi.render();
let Omar = new Employeedata(`Omar Zaid`, randomIdnum(), `Development	`, `Senior`);
Omar.render();
let Rana = new Employeedata(`Rana Saleh`, randomIdnum(), `Development`, `Junior`);
Rana.render();
let Hadi = new Employeedata(`Hadi Ahmad`, randomIdnum(), `Finance`, `Mid-Senior`);
Hadi.render();


{/* <img src="/image.jpg/Ghazi.jpg" style="width:400px;height:400px; margin-left: 2%;">"
<img src="/image.jpg/Hadi.jpg" style="width:400px;height:400px; margin-left: 2%;">"
<img src="/image.jpg/Lana.jpg" style="width:400px;height:400px; margin-left: 2%;">"
<img src="/image.jpg/Omar.jpg" style="width:400px;height:400px; margin-left: 2%;">"
<img src="/image.jpg/Rana.jpg" style="width:400px;height:400px; margin-left: 2%;">"
<img src="/image.jpg/Safi.jpg" style="width:400px;height:400px; margin-left: 2%;">"
<img src="/image.jpg/Tamara.jpg" style="width:400px;height:400px; margin-left: 2%;">" */}

// #main div {
//     width: 13px;
//     height:13px;



//     }

