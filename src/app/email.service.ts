import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//send email in angular 6 EmailService
@Injectable()
export class EmailService {
  constructor(private http:  Http) { }
  public sendEmail(argparam) {
    console.log("Sending Email");
    return this.http.post('httpspakainfo.com/email/', argparam).pipe(
    map(res => res.json()));
    //.catch(this._errorHandler);
  }
  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }
  
}