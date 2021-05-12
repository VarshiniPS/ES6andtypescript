class fibo{
    private previousno:number;
    private currentno:number;
    constructor(previousno:number,currentno:number){
        this.previousno=previousno;
        this.currentno=currentno;

    }
    next(){
        var nextTerm;
        for (let i = 1; i <=7; i++){
            console.log(this.previousno);
            nextTerm = this.previousno + this.currentno;
            this.previousno = this.currentno;
            this.currentno= nextTerm;
        
        }  
    };

    };

    let Res=new fibo(0,1);
    Res.next();