function armstr(no:number)
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

if(no>=1000)
{
arm=0;
}
}

armstr(1634);