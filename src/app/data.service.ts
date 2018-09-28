import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {Report} from './Report';
import {Winner} from './Winner';
import { EmailService } from './email.service';

import{BehaviorSubject}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

private temp:Report[];
//goal=this.goals.asObservable();
//retrievedData;
reports=new Array;
W:Winner;
public tempstring:string=" ";
email:EmailService;
report:Report;//=this.report.asObservable();
id:any='0';
  constructor(private http: HttpClient,protected localStorage: LocalStorage) {
    this.GetData();
   }
   ngOnInit(){

  }
  Email(name, email, comment){
      email.sendEmail({
        from: 'Lottery App <lottery_app@gmail.com>',
        to: email,
        name: name,
        text: comment,
      })
      .subscribe(
        () => {},
        err => console.log(err)
      );
    
  }
  GetData(){
    var retrievedData = localStorage.getItem("Data");
    this.reports = (JSON.parse(retrievedData)) as Report[];
    this.NewWinner();
  }
  SetData(){
    localStorage.setItem("Data", JSON.stringify(this.reports));
  }


  add(report :Report){
    this.report=report;
    this.Sort();
if(this.reports!=null){
  this.reports.push(this.report);
  console.log(this.reports);
}
else{
  this.reports=[this.report];
  console.log(this.reports);
}

  this.SetData();
  this.GetData();

  }
  Sort(){
    var temp;
    if(this.report.Num1>this.report.Num3){
        temp=this.report.Num1;
        this.report.Num1=this.report.Num3;
        this.report.Num3=temp;
    }
    if(this.report.Num2>this.report.Num3){
        temp=this.report.Num2;
        this.report.Num2=this.report.Num3;
        this.report.Num3=temp;
    }
}

  public NewWinner(){
    var Numbers= Array[3]=[0,0,0];
    let now = new Date();
    try{
    var retrievedData = localStorage.getItem("Winner");
    this.W = (JSON.parse(retrievedData)) as Winner;
    }
    catch{
      
    }
    if(this.W==null||this.W.Time!=now.getHours().toString()){
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
        Numbers.sort();
        this.W=new Winner();
        this.W.Winner(Numbers[0].toString(),Numbers[1].toString(),Numbers[2].toString());
        let now = new Date();
        this.W.Time=now.getHours().toString();
        localStorage.setItem("Winner", JSON.stringify(this.W));
        
    }
  }
  GetRandomInt(max,min){
    return Math.floor(Math.random()*(max+1-min)+1)
    
    }
  public CheckWinner():any{
    var temp="",n=0;
    console.log("CheckWinner");
    this.reports.forEach(r=>{
      try{
          if(Number.parseInt(r.Num1)==Number.parseInt(this.W.Num1)&&Number.parseInt(r.Num2)==Number.parseInt(this.W.Num2)&&Number.parseInt(r.Num3)==Number.parseInt(this.W.Num3)){
            if(n==0){
              temp=r.Fullname;
            }
            else{
              temp+=", "+r.Fullname;
              }
           n++;
            }

          }
        catch{
      
        }
      })
      if(n==0){
        return "No Winners";
      }
      else if(n==1){
        return "Winner Is:"+temp.toString();
      }
      else{
        return "Winners Are:"+temp.toString();
      }
      
  }
}
  

