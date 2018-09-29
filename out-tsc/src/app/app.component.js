var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(_data, http) {
        this._data = _data;
        this.http = http;
        this.title = 'lottery';
        this.itemCount = 0;
        this.btnText = 'Add';
        this.goalText = '';
        this.Input_1 = 'Full Name';
        this.Input_2 = 'Email';
        this.val1 = '';
        this.val2 = '';
        this.Error = 1;
        this.temp = 6;
        this.Numbers = [0, 0, 0];
        this.index = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.Start();
    };
    AppComponent.prototype.Start = function () {
        this.ResetButtons();
        this._data.GetData();
        var Numbers = Array[3] = [0, 0, 0];
        this.index = 0;
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
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var HHH = today.getHours();
        var MMM = today.getMinutes();
        this.Winner = this._data.CheckWinner();
    };
    AppComponent.prototype.log = function (X) {
        switch (X) {
            case 1:
                console.log(1);
                if (this.val1 == '') {
                    alert("Input " + this.Input_1);
                    this.Error = 1;
                    return false;
                }
                else if (!(this.val1.indexOf(' ') > 0)) {
                    alert("Full Name not good!");
                    this.Error = 1;
                    return false;
                }
                else {
                    this.Error = 0;
                    return true;
                }
                break;
            case 2:
                if (this.val2 == '') {
                    alert("Input " + this.Input_2);
                    this.Error = 1;
                    return false;
                }
                else if (!(this.val2.indexOf('@') > 0) || !(this.val2.indexOf('.') > 0) || !(this.val2.indexOf('.') > this.val2.indexOf('@'))) {
                    alert("Email not good!");
                    this.Error = 1;
                    return false;
                }
                else {
                    this.Error = 0;
                    return true;
                }
                break;
            case 3:
                if (this.Numbers[0] != 0 && this.Numbers[1] != 0 && this.Numbers[2] != 0) {
                    this.Error = 0;
                    return true;
                }
                else {
                    this.Error = 1;
                    alert("ball input not good!");
                    return false;
                }
                break;
        }
    };
    AppComponent.prototype.GetRandomInt = function (max, min) {
        return Math.floor(Math.random() * (max + 1 - min) + 1);
    };
    AppComponent.prototype.add = function () {
        if (this.log(1) && this.log(2) && this.log(3)) {
            var Fullname = this.val1;
            var Email = this.val2;
            var Num1 = this.Numbers[0].toString();
            var Num2 = this.Numbers[1].toString();
            var Num3 = this.Numbers[2].toString();
            this._data.add({ Fullname: Fullname, Email: Email, Num1: Num1, Num2: Num2, Num3: Num3 });
        }
        else {
        }
    };
    AppComponent.prototype.bclick = function (num) {
        if (!(this.Numbers.indexOf(num) > -1)) {
            if (this.index < 3) {
                this.Numbers[this.index++] = num;
            }
            else {
                //var temp;
                this.Numbers = [0, 0, 0];
                this.ResetButtons();
                this.index = 0;
                this.Numbers[this.index++] = num;
            }
            var b;
            switch (num) {
                case 1:
                    b = document.getElementById('b1');
                    break;
                case 2:
                    b = document.getElementById('b2');
                    break;
                case 3:
                    b = document.getElementById('b3');
                    break;
                case 4:
                    b = document.getElementById('b4');
                    break;
                case 5:
                    b = document.getElementById('b5');
                    break;
            }
            b.style.backgroundColor = '#000000';
        }
    };
    AppComponent.prototype.ResetButtons = function () {
        document.getElementById('b1').style.backgroundColor = '#4C3F25';
        document.getElementById('b2').style.backgroundColor = '#6CAF23';
        document.getElementById('b3').style.backgroundColor = '#8C6F29';
        document.getElementById('b4').style.backgroundColor = '#2C5F26';
        document.getElementById('b5').style.backgroundColor = '#1C2F84';
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [DataService, HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map