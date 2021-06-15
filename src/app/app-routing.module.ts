import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllGroupsComponent } from '../app/Groups/show-all-groups/show-all-groups.component';
import { LoginComponent } from "../app/login/login.component";
// import { ShowAllItemsComponent } from './Items/show-all-items/show-all-items.component';
import { ShowAllSubGroupsComponent } from './SubGroups/show-all-sub-groups/show-all-sub-groups.component';
import { from } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CatalogDisplayComponent } from './catalog/catalog-display/catalog-display.component';
import { AddCatalogComponent } from './catalog/add-catalog/add-catalog.component';
import { DisplayAllEmployeesComponent } from './employee/display-all-employees/display-all-employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ItemStatusesComponent } from './item-statuses/item-statuses.component';
import { UpdateCatItemComponent } from './catalog/update-cat-item/update-cat-item.component';
import { AllUsersComponent } from "../app/All-users/all-users.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowGroupAndSubComponent } from './show-group-and-sub/show-group-and-sub.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: '**', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },

  { path: 'navbar', component: NavBarComponent },
  // { path: 'addorder', component: AddOrderComponent },

  {
    path: 'home', component: HomeComponent, children:
      [

        { path: 'navbar', component: NavBarComponent },
        {
          path: 'group', component: ShowAllGroupsComponent
        },
        {
          path: 'groupAndSubGroup', component: ShowGroupAndSubComponent
        },
        {
          path: 'subGroup', component: ShowAllSubGroupsComponent
        },
        {
          path: 'catalog', component: CatalogDisplayComponent
        },
        {
          path: 'dashboard', component: DashboardComponent
        },
        {
          path: 'addCatalogItems', component: AddCatalogComponent
        },
        {
           path: 'AllUsers', component: AllUsersComponent },
        {
          path: 'Employee', component: DisplayAllEmployeesComponent
        },
        {
          path: 'addemployee', component: AddEmployeeComponent
        },
        { path: 'editEmployee/:empId', component: EditEmployeeComponent },

        { path: 'itemStatus/:itemId', component: ItemStatusesComponent },

        { path: 'updateItem/:itemId', component: UpdateCatItemComponent },





      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login' }]
// { path: 'login', component: SignupComponent },
// {
//   path: 'home', component: HomeComponent, children: [
//     { path: 'tabs', component: AllProjectsComponent }}]
export class AppRoutingModule {

}
