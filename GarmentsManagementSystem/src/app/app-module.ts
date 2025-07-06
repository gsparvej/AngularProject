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
import { AddDesignation } from './HR/add-designation/add-designation';
import { ViewAllDesignation } from './HR/view-all-designation/view-all-designation';
import { ViewAllAttendance } from './HR/view-all-attendance/view-all-attendance';
import { AddAttendance } from './HR/add-attendance/add-attendance';
import { ViewAllLeave } from './HR/view-all-leave/view-all-leave';
import { AddLeave } from './HR/add-leave/add-leave';
import { Login } from './Auth/login/login';
import { Registration } from './Auth/registration/registration';
import { UserProfile } from './Auth/user-profile/user-profile';
import { Logout } from './Auth/logout/logout';
import { Home } from './home/home';
import { ViewAllBuyer } from './Merchandiser/view-all-buyer/view-all-buyer';
import { AddBuyer } from './Merchandiser/add-buyer/add-buyer';

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
    UpdateDepartment,
    AddDesignation,
    ViewAllDesignation,
    ViewAllAttendance,
    AddAttendance,
    ViewAllLeave,
    AddLeave,
    Login,
    Registration,
    UserProfile,
    Logout,
    Home,
    ViewAllBuyer,
    AddBuyer
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
