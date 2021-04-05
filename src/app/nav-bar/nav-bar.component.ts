import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
siteLanguage: string = 'English';
siteLocale: string;
pharmacyName:string
pharmacyID:Number
role:string
languageList = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'arabic' },
];
  items: MenuItem[];
  lang;

  constructor(private routee: Router) { 
  }
  ngOnInit() {
    this.role = localStorage.getItem("roles")
    console.log(this.role)
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home/dashboard'],
      },
      {
        label: 'Groups',
        icon: "pi pi-filter",
        routerLink: ['/home/group'],
      },
      {
        label: 'Groups & SubGroups',
        icon: "pi pi-filter",
        routerLink: ['/home/groupAndSubGroup'],
      },
      {
        label: 'SubGroups',
        icon: 'pi pi-chart-bar',
        routerLink: ['subGroup'],
        // visible:this.role =='SuperAdmin'|| this.role=='Admin' || this.role=='Clerk',
        
      },

      {
        label: 'Employees',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['employee'],
        visible: this.role =='Admin'
      },
      {
        label: 'All Users',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['AllUsers'],

      }
      ,
      // {
      //   label: 'Items',
      //   icon: 'pi pi-fw pi-power-off',
      //   routerLink: ['items'],
      //   // visible: this.role =='SuperAdmin'
      // },
      {
        label: 'Catalog',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['catalog'],
        // visible: this.role =='SuperAdmin'
      },
      {
        label: 'Employee',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['Employee'],
        // visible: this.role =='SuperAdmin'
      },
    ];

  }

  public logout() {
    console.log(localStorage.getItem("token"))
    localStorage.removeItem("token");
    this.routee.navigate(['/login'])
    localStorage.clear();
  }
}
