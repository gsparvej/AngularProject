import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllEmployee } from './HR/view-all-employee/view-all-employee';
import { ViewAllDepartment } from './HR/view-all-department/view-all-department';
import { AddDepartment } from './HR/add-department/add-department';
import { AddEmployee } from './HR/add-employee/add-employee';

const routes: Routes = [
  {path: 'viewAllEmp', component: ViewAllEmployee},
  {path: 'addEmp', component: AddEmployee},
  {path: 'viewAllDepart', component: ViewAllDepartment},
  {path: 'addDepart', component: AddDepartment}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
