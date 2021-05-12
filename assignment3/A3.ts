interface employee{
    fname:string,
    lname:string,
    age:number,
    
 
     
}

var employee1:employee = { 
    fname:"Tom",
    lname:"Hanks", 
    age:45,
    
 } 

 interface circle{
     radius:number,
     area:number,
     
 }

 var circle1:circle = { 
    radius:10,
    area:314, 
  
    
 } 

 var printall=function(employee1:any,circle1:any) {
     
    console.log(employee1.fname);
    console.log(employee1.lname);
    console.log(employee1.age);
    console.log(circle1.radius);
    console.log(circle1.area);


 }

 printall(employee1,circle1);