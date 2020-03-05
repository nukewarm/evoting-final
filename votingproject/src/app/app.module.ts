import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { Users } from './model/users.model';
import { Account } from './model/account.model';
import { UserRepository } from './model/user.repository';
import { RestDataSource } from './model/rest.datasource';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    LoginModule,
    HomeModule
  ],
  providers: [Users,Account,UserRepository, RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
