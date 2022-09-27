import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListUnicornComponent } from './list-unicorn/list-unicorn.component';
import { AddUnicornFormComponent } from './add-unicorn-form/add-unicorn-form.component';
import { AddFormUnicornComponent } from './add-form-unicorn/add-form-unicorn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUnicornComponent,
    AddUnicornFormComponent,
    AddFormUnicornComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
