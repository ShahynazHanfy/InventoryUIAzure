import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonsModule } from 'angular-bootstrap-md'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';     
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllGroupsComponent } from './Groups/show-all-groups/show-all-groups.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog'; 
import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
// For MDB Angular Free
import {MatCheckboxModule} from '@angular/material/checkbox';

import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputSwitchModule} from 'primeng/inputswitch';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {PickListModule} from 'primeng/picklist';
import {OrderListModule} from 'primeng/orderlist';
 import { MatButtonModule } from '@angular/material/button';
 import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TreeModule} from 'primeng/tree';
import { NavBarComponent } from "../app/nav-bar/nav-bar.component";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { HomeComponent} from "../app/home/home.component";
// import {MatTooltipModule} from '@angular/material/tooltip';
import { ShowAllSubGroupsComponent } from './SubGroups/show-all-sub-groups/show-all-sub-groups.component';
// import { MaterialModule} from '@angular/material';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { MessagesModule } from 'primeng/messages';
// import {TreeNode} from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import { PrimeNGConfig } from 'primeng/api';
import { CatalogDisplayComponent } from './catalog/catalog-display/catalog-display.component';
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import { AddCatalogComponent } from './catalog/add-catalog/add-catalog.component';
import { DisplayAllEmployeesComponent } from './employee/display-all-employees/display-all-employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
 import { MatDialogModule } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatTabsModule } from '@angular/material/tabs';
 import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatToolbarModule } from '@angular/material/toolbar';;
import { NgApexchartsModule } from "ng-apexcharts";

import {DragDropModule} from '@angular/cdk/drag-drop';
// import { CalendarModule } from 'smart-webcomponents-angular/calendar';
//import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
// import { ClarityModule } from '@clr/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {PortalModule} from '@angular/cdk/portal';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ItemStatusesComponent } from './item-statuses/item-statuses.component';
import { UpdateCatItemComponent } from './catalog/update-cat-item/update-cat-item.component';
import { AllUsersComponent } from "../app/All-users/all-users.component";
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowGroupAndSubComponent } from './show-group-and-sub/show-group-and-sub.component';
// import {NglModule} from 'ng-lightning';
import {NglModalsModule} from 'ng-lightning';
import {TooltipModule} from 'primeng/tooltip';

// import { AllUsersComponent } from "../app/All-users/all-users.component";
// import {CoreModule} from './core/core.module'
// MDB Angular Pro
// MDB Angular Pro
// import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowAllGroupsComponent,
    ShowAllSubGroupsComponent,
    HomeComponent,
    NavBarComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    CatalogDisplayComponent,
    AddCatalogComponent,
    DisplayAllEmployeesComponent,
    ItemStatusesComponent,
    UpdateCatItemComponent,
    AllUsersComponent,
    DashboardComponent,
    ShowGroupAndSubComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
   // MatInputModule,
   TooltipModule,
   MatCheckboxModule,
    DragDropModule,
    // ClarityModule,
    NglModalsModule,
    MessagesModule,
    MatNativeDateModule,
  // ClarityModule,
  // MatCheckboxModule,
  NgApexchartsModule,
  Ng2SearchPipeModule,
    CardModule,
    NgxBarcodeModule,
   // MatTabsModule,
    PortalModule,
    MatMenuModule,
     MatButtonModule,
     NavbarModule, 
     WavesModule,
    MatDatepickerModule,
    MatDialogModule,
    AutoCompleteModule,
    //MatToolbarModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    DataViewModule,
    MenubarModule,  
    ButtonsModule,
    MultiSelectModule,
    MatRadioModule,
    VirtualScrollerModule,
    PickListModule,
    InputNumberModule,
    RippleModule,
    SplitButtonModule,
    PanelModule,
     MatButtonModule,
     MatCardModule,
    OrganizationChartModule,
    InputTextareaModule,
    InputSwitchModule,
    OrderListModule,
    // MatSelectModule,
    // MatMenuModule,
    ProgressBarModule,
    FileUploadModule,
    // ToastrModule,
   MatInputModule,
    // MatToolbarModule,
    ToolbarModule,
    KeyFilterModule,
    DynamicDialogModule,
    PanelMenuModule,
    // MatTooltipModule,
     MatIconModule,
    ContextMenuModule,
    TreeModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    HttpClientModule,
    CommonModule,
    ToastModule,
    AccordionModule,
    TabViewModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    SliderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }

