import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StdFormComponent } from './shared/component/std-form/std-form.component';
import { StdTableComponent } from './shared/component/std-table/std-table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
