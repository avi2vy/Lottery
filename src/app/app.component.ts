import { Component } from '@angular/core';
import {DataService} from './data.service';
import { HttpClient } from '@angular/common/http';
import { Report } from './Report';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'lottery';
  itemCount:number=0;
  btnText:string='Add';
  goalText:string='';
  constructor(private _data:DataService,private http: HttpClient){}

ngOnInit(){
  this.Start();
}

Input_1= 'Full Name';
Input_2= 'Email';
val1:string ='';
val2:string ='';
Winner:string;
Error=1;
temp:number=6;
Numbers=[0,0,0];
DataNumbers: Array<number>[3];
index=0;
count:number;
private database:any;

public pepole:Array<Report>;


Start(){
  this.ResetButtons()
 this._data.GetData();
var Numbers= Array[3]=[0,0,0];
this.index=0;
var i=0, num=this.GetRandomInt(5,1);
Numbers[i++]=num;
while(Numbers[2]==0){
  if(Numbers.indexOf(num) !== -1){
  num=this.GetRandomInt(5,1);
  }
  else{
    Numbers[i++]=num;
  }
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var HHH=today.getHours();
var MMM=today.getMinutes();
this.Winner=this._data.CheckWinner();

}


log(X):any{
  switch(X){
    case 1:
    console.log(1);
    if(this.val1==''){
      alert("Input "+this.Input_1);
      this.Error=1;
      return false;
    }
    else if((this.val1.indexOf('@') > 0)){
this.val2=this.val1;
this.val1='';
     
      this.Error=1;
      return false;
    }
else if(!(this.val1.indexOf(' ') > 0)){
  alert( "Full Name not good!" );
  this.Error=1;
  return false;
}
else{
  this.Error=0;
  return true;
}
    break;

    case 2:
    if(this.val2==''){
      alert("Input "+this.Input_2);
      this.Error=1;
      return false;
    }
    else if(!(this.val2.indexOf('@') > 0)||!(this.val2.indexOf('.') > 0)||!(this.val2.indexOf('.') > this.val2.indexOf('@'))){

      alert( "Email not good!" );
      this.Error=1;
      return false;
    }
    else{
      this.Error=0;
      return true;
    }
    break;
    case 3:
    if(this.Numbers[0]!=0&&this.Numbers[1]!=0&&this.Numbers[2]!=0){
      this.Error=0;
      return true;
    }
    else{
      this.Error=1;
      alert( "ball input not good!" );
      return false;
    }
    break;
  }
}
GetRandomInt(max,min){
return Math.floor(Math.random()*(max+1-min)+1)

}
add(){

  if(this.log(1)&&this.log(2)&&this.log(3)){

var Fullname=this.val1;
var Email=this.val2;
var Num1=this.Numbers[0].toString();
var Num2=this.Numbers[1].toString();
var Num3=this.Numbers[2].toString();


this._data.add({Fullname,Email,Num1,Num2,Num3}as Report) ;
this.val1='';
this.val2='';
this.ResetButtons();
alert( Fullname+" you're in!" );
}
else{

}
}

bclick(num){
if(!(this.Numbers.indexOf(num)>-1)){
if(this.index<3){
  this.Numbers[this.index++]=num;
}
else{
  //var temp;
  this.Numbers=[0,0,0];
  this.ResetButtons();
  this.index=0;
  this.Numbers[this.index++]=num;


}

var b;
switch(num){
    case 1:
    b = document.getElementById( 'b1' );
    break;
    case 2:
    b = document.getElementById( 'b2' );
    break;
    case 3:
    b = document.getElementById( 'b3' );
    break;
    case 4:
    b = document.getElementById( 'b4' );
    break;
    case 5:
    b = document.getElementById( 'b5' );
    break;
}
b.style.backgroundColor= '#000000';
}
}
ResetButtons(){
document.getElementById('b1').style.backgroundColor='#4C3F25';
document.getElementById('b2').style.backgroundColor='#6CAF23';
document.getElementById('b3').style.backgroundColor='#8C6F29';
document.getElementById('b4').style.backgroundColor='#2C5F26';
document.getElementById('b5').style.backgroundColor='#1C2F84';
}
}
