import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './products/welcome.component';
import { ProductModule } from './products/product.module';


@NgModule({
   declarations: [
      AppComponent,
      WelcomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot([
         { path: 'welcome', component: WelcomeComponent},
         { path: '', redirectTo: 'welcome', pathMatch: 'full'},
         { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ]),
      ProductModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
