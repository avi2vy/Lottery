var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Winner } from './Winner';
var DataService = /** @class */ (function () {
    function DataService(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
        //goal=this.goals.asObservable();
        //retrievedData;
        this.reports = new Array;
        this.tempstring = " ";
        this.id = '0';
        this.GetData();
    }
    DataService.prototype.ngOnInit = function () {
    };
    DataService.prototype.Email = function (name, email, comment) {
        email.sendEmail({
            from: 'Lottery App <lottery_app@gmail.com>',
            to: email,
            name: name,
            text: comment,
        })
            .subscribe(function () { }, function (err) { return console.log(err); });
    };
    DataService.prototype.GetData = function () {
        var retrievedData = localStorage.getItem("Data");
        this.reports = (JSON.parse(retrievedData));
        this.NewWinner();
    };
    DataService.prototype.SetData = function () {
        localStorage.setItem("Data", JSON.stringify(this.reports));
    };
    DataService.prototype.add = function (report) {
        this.report = report;
        this.Sort();
        if (this.reports != null) {
            this.reports.push(this.report);
            console.log(this.reports);
        }
        else {
            this.reports = [this.report];
            console.log(this.reports);
        }
        this.SetData();
        this.GetData();
    };
    DataService.prototype.Sort = function () {
        var temp;
        if (this.report.Num1 > this.report.Num3) {
            temp = this.report.Num1;
            this.report.Num1 = this.report.Num3;
            this.report.Num3 = temp;
        }
        if (this.report.Num2 > this.report.Num3) {
            temp = this.report.Num2;
            this.report.Num2 = this.report.Num3;
            this.report.Num3 = temp;
        }
    };
    DataService.prototype.NewWinner = function () {
        var Numbers = Array[3] = [0, 0, 0];
        var now = new Date();
        try {
            var retrievedData = localStorage.getItem("Winner");
            this.W = (JSON.parse(retrievedData));
        }
        catch (_a) {
        }
        if (this.W == null || this.W.Time != now.getHours().toString()) {
            var i = 0, num = this.GetRandomInt(5, 1);
            Numbers[i++] = num;
            while (Numbers[2] == 0) {
                if (Numbers.indexOf(num) !== -1) {
                    num = this.GetRandomInt(5, 1);
                }
                else {
                    Numbers[i++] = num;
                }
            }
            Numbers.sort();
            this.W = new Winner();
            this.W.Winner(Numbers[0].toString(), Numbers[1].toString(), Numbers[2].toString());
            var now_1 = new Date();
            this.W.Time = now_1.getHours().toString();
            localStorage.setItem("Winner", JSON.stringify(this.W));
        }
    };
    DataService.prototype.GetRandomInt = function (max, min) {
        return Math.floor(Math.random() * (max + 1 - min) + 1);
    };
    DataService.prototype.CheckWinner = function () {
        var _this = this;
        var temp = "", n = 0;
        console.log("CheckWinner");
        this.reports.forEach(function (r) {
            try {
                if (Number.parseInt(r.Num1) == Number.parseInt(_this.W.Num1) && Number.parseInt(r.Num2) == Number.parseInt(_this.W.Num2) && Number.parseInt(r.Num3) == Number.parseInt(_this.W.Num3)) {
                    if (n == 0) {
                        temp = r.Fullname;
                    }
                    else {
                        temp += ", " + r.Fullname;
                    }
                    n++;
                }
            }
            catch (_a) {
            }
        });
        if (n == 0) {
            return "No Winners";
        }
        else if (n == 1) {
            return "Winner Is:" + temp.toString();
        }
        else {
            return "Winners Are:" + temp.toString();
        }
    };
    DataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, LocalStorage])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map