import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormularzComponent } from './formularz/formularz.component';
import { MyszkiComponent } from './myszki/myszki.component';
import { MyszkiRowComponent } from './myszki-row/myszki-row.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularzComponent,
    MyszkiComponent,
    MyszkiRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
