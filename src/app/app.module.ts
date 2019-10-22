import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TutorsComponent } from './tutors/tutors.component';
import { TutsComponent } from './tuts/tuts.component';

var rules = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'coursespage',
    component: CoursesComponent
  },
  {
    path: 'tutorspage',
    component: TutorsComponent
  },
  {
    path: 'tutspage',
    component: TutsComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursesComponent,
    TutorsComponent,
    TutsComponent
  ],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(rules)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
