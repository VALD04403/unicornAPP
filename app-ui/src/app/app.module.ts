import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListUnicornComponent } from './list-unicorn/list-unicorn.component';
import { AddUnicornFormComponent } from './add-unicorn-form/add-unicorn-form.component';
import { AddFormUnicornComponent } from './add-form-unicorn/add-form-unicorn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatesPageComponent } from './mates-page/mates-page.component';
import { CreateMatesFormComponent } from './create-mates-form/create-mates-form.component';
import { UnicornItemComponent } from './unicorn-item/unicorn-item.component';
import { ListMatesComponent } from './list-mates/list-mates.component';
import { MateCardComponent } from './mate-card/mate-card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUnicornComponent,
    AddUnicornFormComponent,
    AddFormUnicornComponent,
    MatesPageComponent,
    CreateMatesFormComponent,
    UnicornItemComponent,
    ListMatesComponent,
    MateCardComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
