import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AtomsModule} from "./modules/atoms.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtomsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
