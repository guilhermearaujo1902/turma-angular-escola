import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Student } from './components/student/student';
import { StudentList } from './components/student-list/student-list';
import { StudentForm } from './components/student-form/student-form';

@NgModule({
  declarations: [
    App,
    Student,
    StudentList,
    StudentForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
