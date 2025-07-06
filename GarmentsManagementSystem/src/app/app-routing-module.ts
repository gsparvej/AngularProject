import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllEmployee } from './HR/view-all-employee/view-all-employee';
import { ViewAllDepartment } from './HR/view-all-department/view-all-department';
import { AddDepartment } from './HR/add-department/add-department';
import { AddEmployee } from './HR/add-employee/add-employee';
import { ViewAllAttendance } from './HR/view-all-attendance/view-all-attendance';
import { AddAttendance } from './HR/add-attendance/add-attendance';
import { ViewAllLeave } from './HR/view-all-leave/view-all-leave';
import { AddLeave } from './HR/add-leave/add-leave';
import { Registration } from './Auth/registration/registration';
import { Login } from './Auth/login/login';
import { Home } from './home/home';
import { ViewAllBuyer } from './Merchandiser/view-all-buyer/view-all-buyer';
import { AddBuyer } from './Merchandiser/add-buyer/add-buyer';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'login',component: Login},
  {path: 'viewAllEmp', component: ViewAllEmployee},
  {path: 'addEmp', component: AddEmployee},
  {path: 'viewAllDepart', component: ViewAllDepartment},
  {path: 'addDepart', component: AddDepartment},
  {path: 'viewAllAtten', component: ViewAllAttendance},
  {path: 'addAtten', component: AddAttendance},
  {path: 'viewAllLeave', component: ViewAllLeave},
  {path: 'addLeave', component: AddLeave},
  {path: 'reg', component: Registration},
  {path: 'login', component: Login},
  {path: 'viewAllBuyer', component: ViewAllBuyer},
  {path: 'addBuyer', component: AddBuyer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
