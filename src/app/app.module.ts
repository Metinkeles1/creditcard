import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardfromComponent } from './cardfrom/cardfrom.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardfromComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
