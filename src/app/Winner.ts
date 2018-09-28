export class Winner{
Time:string;
Num1:string;
Num2:string;
Num3:string;
constructor(){
   this.Time="";
   this.Num1=""; 
   this.Num2="";
   this.Num3="";
}
Winner(n1,n2,n3){
    this.Num1=n1; 
    this.Num2=n2;
    this.Num3=n3;
}
}