let order={
 id: 122356,
 title:"order1",
 price: 122,   
printorder:function(){
  console.log(order);
  
},
getPrice:function(){
console.log(this.price);
}
}

order.printorder();
order.getPrice();

var ob1=Object.assign(order);
console.log(order);
ob1.title="hairclip";
ob1.price="34";
console.log(ob1);



