import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ViewAllEmployee } from './HR/view-all-employee/view-all-employee';
import { AddEmployee } from './HR/add-employee/add-employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { AddDepartment } from './HR/add-department/add-department';
import { ViewAllDepartment } from './HR/view-all-department/view-all-department';
import { UpdateEmployee } from './HR/update-employee/update-employee';
import { UpdateDepartment } from './HR/update-department/update-department';

@NgModule({
  declarations: [
    App,
    ViewAllEmployee,
    AddEmployee,
    Header,
    Footer,
    AddDepartment,
    ViewAllDepartment,
    UpdateEmployee,
    UpdateDepartment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
