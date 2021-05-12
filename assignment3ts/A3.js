"use strict";
let Print = function () {
    console.log("employee interface");
};
var employee1 = {
    fname: "Tom",
    lname: "Hanks",
    age: 45,
};
var circle1 = {
    radius: 10,
    area: 314,
};
var printall = function (employee1, circle1) {
    console.log(employee1.fname);
    console.log(employee1.lname);
    console.log(employee1.age);
    console.log(circle1.radius);
    console.log(circle1.area);
};
printall(employee1, circle1);
//# sourceMappingURL=A3.js.map