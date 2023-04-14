import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Task3Component } from './task3/task3.component';
import { Test5Component } from './test5/test5.component';
import { Tast4Component } from './tast4/tast4.component';
import { Task6Component } from './task6/task6.component';
import { Task7Component } from './task7/task7.component';
import { Task8Component } from './task8/task8.component';
import { Task9Component } from './task9/task9.component';
import { Task11ParentComponent } from './task11-parent/task11-parent.component';
import { Task11ChildComponent } from './task11-child/task11-child.component';
import { Task10Component } from './task10/task10.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Task3Component,
    Test5Component,
    Tast4Component,
    Task6Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task11ParentComponent,
    Task11ChildComponent,
    Task10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
