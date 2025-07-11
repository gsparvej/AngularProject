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
import { UserProfile } from './Auth/user-profile/user-profile';
import { Designation } from '../model/HR/designation.model';
import { AddDesignation } from './HR/add-designation/add-designation';
import { AddUom } from './Merchandiser/add-uom/add-uom';
import { ViewAllUom } from './Merchandiser/view-all-uom/view-all-uom';
import { AddBom } from './Merchandiser/add-bom/add-bom';
import { ViewAllBom } from './Merchandiser/view-all-bom/view-all-bom';
import { AddBomView } from './Merchandiser/add-bom-view/add-bom-view';
import { ViewFullBomView } from './Merchandiser/view-full-bom-view/view-full-bom-view';
import { CreateOrder } from './Merchandiser/create-order/create-order';
import { HalfViewOrder } from './Merchandiser/half-view-order/half-view-order';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'login',component: Login},
  {path: 'viewAllEmp', component: ViewAllEmployee},
  {path: 'addEmp', component: AddEmployee},
  {path: 'viewAllDepart', component: ViewAllDepartment},
  {path: 'addDesig', component: AddDesignation},
  {path: 'addDepart', component: AddDepartment},
  {path: 'viewAllAtten', component: ViewAllAttendance},
  {path: 'addAtten', component: AddAttendance},
  {path: 'viewAllLeave', component: ViewAllLeave},
  {path: 'addLeave', component: AddLeave},
  {path: 'reg', component: Registration},
  {path: 'login', component: Login},
  {path: 'viewAllBuyer', component: ViewAllBuyer},
  {path: 'addBuyer', component: AddBuyer},
  {path:'userprofile', component: UserProfile},
  {path: 'addUom', component: AddUom},
  {path: 'viewAllUom', component: ViewAllUom},
  {path: 'addBom', component: AddBom},
  {path: 'viewBom', component: ViewAllBom},
  {path: 'addBomBomView', component: AddBomView},
  {path: 'viewBomBomView/:id', component: ViewFullBomView},
  {path: 'createOrder', component: CreateOrder},
  {path: 'viewHalfOrder', component: HalfViewOrder}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
