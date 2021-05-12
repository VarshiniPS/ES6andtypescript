/*function armstr(no:number)
{
var arm=0,a,b,c,d,num;
num=no;
var temp=num;
while(temp>0)
{
a=temp%10;
temp=parseInt(temp/10); // convert float into Integer
arm=arm+a*a*a;
}
if(arm==num)
{
console.log("Armstrong number");
}
else
{
console.log("Not Armstrong number");
}
}

armstr(153);
 */

class armstr implements IterableIterator<number> {

    /*protected fn1 = 0;
    protected fn2 = 1;*/
    var arm=0,a,b,c,d,num;
    num=no;
    var temp=num;
  
    constructor(protected maxValue?: number) {}
  
    public next(): IteratorResult<number> {
        while(temp>0)
        {
        a=temp%10;
        temp=parseInt(temp/10); // convert float into Integer
        arm=arm+a*a*a;
        }
      if (arm!==num) {
        return {
          done: true,
          value: null
        } 
      } 
      return {
        done: false,
        value: current
      }
    }
  
    [Symbol.iterator](): IterableIterator<number> {
      return this;
    }
  
  }
  
  let Armstr = new (armstr);
  
  Armstr.next() //{ done: false, value: 0 }
  Armstr.next() //{ done: false, value: 1 }
  Armstr.next() //{ done: false, value: 1 }
  Armstr.next() //{ done: false, value: 2 }
  Armstr.next() //{ done: false, value: 3 }
  Armstr.next() //{ done: false, value: 5 }
  
  let Armstro = new armstr(153);
  console.log(Array.from(Armstro));
  
  