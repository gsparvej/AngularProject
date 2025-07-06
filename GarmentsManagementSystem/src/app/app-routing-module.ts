import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllEmployee } from './HR/view-all-employee/view-all-employee';
import { ViewAllDepartment } from './HR/view-all-department/view-all-department';
import { AddDepartment } from './HR/add-department/add-department';
import { AddEmployee } from './HR/add-employee/add-employee';
import { ViewAllAttendance } from './HR/view-all-attendance/view-all-attendance';
import { AddAttendance } from './HR/add-attendance/add-attendance';

const routes: Routes = [
  {path: '',component: ViewAllEmployee},
  {path: 'viewAllEmp', component: ViewAllEmployee},
  {path: 'addEmp', component: AddEmployee},
  {path: 'viewAllDepart', component: ViewAllDepartment},
  {path: 'addDepart', component: AddDepartment},
  {path: 'viewAllAtten', component: ViewAllAttendance},
  {path: 'addAtten', component: AddAttendance}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
