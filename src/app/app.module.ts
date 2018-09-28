import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LocalStorage } from '@ngx-pwa/local-storage';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DataService,LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
