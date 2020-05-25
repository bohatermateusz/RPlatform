import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
