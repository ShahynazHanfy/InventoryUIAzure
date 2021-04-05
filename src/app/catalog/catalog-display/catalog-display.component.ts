import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { employee } from 'src/Shared/Models/employee';
import { ItemDocuments } from 'src/Shared/Models/ItemDocuments';
import { Item } from 'src/Shared/Models/ItemDTO';
import { ItemStatusEmp } from 'src/Shared/Models/ItemStatusEmp';
import { SubGroup } from 'src/Shared/Models/SubGroup';
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { ItemsService } from 'src/Shared/Services/items.service';
import { SubGroupService } from 'src/Shared/Services/sub-group.service';
import { ItemStatusEmpService } from "../../../Shared/Services/item-status-emp.service";


@Component({
  selector: 'app-catalog-display',
  templateUrl: './catalog-display.component.html',
  styleUrls: ['./catalog-display.component.scss'],
  providers: [MessageService,ConfirmationService],

  encapsulation:ViewEncapsulation.None
})
export class CatalogDisplayComponent implements OnInit {


  data2: Item[]
  item: Item
  getimage: any;
  position: string;
  displayBasic: any
  showDocsList:boolean
  subGroups: SubGroup[]
  fileToUpload: File;
  uploadedFiles: any[] = [];
  sortOptions: SelectItem[];
  Itemid: any
  docItem: ItemDocuments
  lstoddocproj: ItemDocuments[]
  itemStatusEmp: ItemStatusEmp
  sortOrder: number;
  displayBasic2: boolean
  sortField: string;
  emps: employee[]
  status: []
  itemId:number
  LstItemStatusEmp:ItemStatusEmp []
   start = Date.now();
  itemDocs:ItemDocuments[]
  StatusArr: Array<{ id: number, status: string }>;
  term:any;
  myarray: Array<{ string}>  =[];
  msgs: Message[] = [];
  constructor(private itemService: ItemsService,
    private subGroupService: SubGroupService,
    private httpClient: HttpClient,
    private employeeService: EmployeeService,
    private router: Router,
    private itemStatusEmpService:ItemStatusEmpService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

   // this.itemStatusEmp.itemDate = new Date();
   this.primengConfig.ripple = true;


    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = false;
    this.subGroups = []
    this.lstoddocproj = []
    this.LstItemStatusEmp=[]
    
    this.StatusArr = [
      { id: 1, status: 'Working' },
      { id: 2, status: 'Damaged' },
      { id: 1002, status: 'Repairing' },
    ];
    this.itemStatusEmp = {
      description: '', employeeId: 0, id: 0, itemDate: '', itemId: 0, statusId: 0, userId: ''
    }
    this.item = {
      groupName: '', id: 0, itemName: '', subGroupId: 0, subGroupName: '', photo: '', description: '',
      price: 0, bar_code: '', brand: '', serialNumber: ''
    }
    this.docItem = {
      id: 0, documentName: '', fileName: '', itemId: 0
    }
    this.data2 = []
    this.getimage = environment.Domain
    this.itemService.GetAllItems().subscribe(e => {
      this.data2 = e
      console.log(e)
      this.data2.forEach(element => {
        this.subGroupService.GetGroupBySubGroupId(element.subGroupId).subscribe(e => {
          element.groupName = e.groupName
        })
      });
    })
    this.subGroupService.GetAllSubGroup().subscribe(e => {
      console.log(e)
      this.subGroups = e
    })
    this.employeeService.GetAllEmployees().subscribe(e => {
      this.emps = e
    })

    this.itemStatusEmp.itemDate = new Date().toISOString().substring(0, 10);
 
  }
  DeleteItem(id) {
    console.log(id)
    this.itemService.deleteItem(id).subscribe(e => {
      console.log("deleted successfully")
      this.ngOnInit()
    })
  }
  UpdateItem(ItemId) {

    this.router.navigate(['home/updateItem',ItemId]);
    
  }
  ViewItemDocs(ItemId) {
    this.itemService.GetItemDocumentsItemId(ItemId).subscribe(
      e=>{
        this.itemDocs = e
        console.log("itemdocs",this.itemDocs)
        this.showDocsList = true
      }
    )
  }
  
  viewSingleDoc(doc) {
    var filePath = `${environment.Domain}wwwroot/ItemDocuments/${doc.fileName}`;
    window.open(filePath);
  }
  delDocument(docID: number,itemId:number) {
    this.itemService.deletedocument(docID).subscribe(res => {
      this.ViewItemDocs(itemId)
    })
  }
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  changeStatus() {
    this.displayBasic = true
  }
  InsertGroup() {
    // console.log("hello")
    this.itemService.inserItem(this.item).subscribe(e => {
      //  console.log(e)   
      this.Itemid = e
      this.docItem.itemId = this.Itemid
      console.log("idd", this.docItem.itemId)

      //  console.log("hello")

    })
  }
  onChange(event) {
    console.log(event)
  }
  onFileSelected(files: FileList) {
    this.fileToUpload = files.item(0);
    const oldName = this.fileToUpload.name;
    const fileExtension = oldName.slice(oldName.lastIndexOf('.') - oldName.length);
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 40;
    const newName = this.makeRandom(lengthOfCode, possible);

    console.log(this.fileToUpload.name);
    Object.defineProperty(this.fileToUpload, 'name', {
      writable: true,
      value: newName + fileExtension
    });
    console.log(this.fileToUpload.name);

    this.item.photo = this.fileToUpload.name;
    //alert(this.prd.Img);

    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    this.itemService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      //c(data);
    }, error => {
      console.log(error);
    });
  }
  makeRandom(lengthOfCode, possible) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text;
  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.docItem.fileName = fileToUpload.name;
    console.log(fileToUpload.name)

    this.httpClient.post(environment.uploadFile, formData)
      .subscribe(res => {
        console.log(res)
        alert('Uploaded Successfully.');



      });
  }
  Savedoctolist() {
    this.lstoddocproj.push(this.docItem);
    this.docItem = {
      id: 0, documentName: '', fileName: '', itemId: this.Itemid
    };
    console.log(this.lstoddocproj);
  }
  SaveDocuentToDB() {

    this.itemService.PostItemDocumentsDTO(this.lstoddocproj).subscribe(e => {
      this.ngOnInit()

    })
  }
  saveId(itemDataId) {
    this.displayBasic2 = true
    this.itemId = itemDataId
    this.itemStatusEmp.itemId = this.itemId 
     console.log(localStorage.getItem("role"))
     this.itemStatusEmp.userId= localStorage.getItem("loginedUserId")
  }
  InsertStatus() {
    console.log("itemStatusEmp",this.itemStatusEmp)
    this.itemStatusEmpService.insertItemStatusEmp(this.itemStatusEmp).subscribe(
      e=>{
        console.log("inserted successfully")
        this.router.navigate(['home/itemStatus',this.itemId]);

      }
    )
  }
  navigateToAllStatus(itemId){
    this.router.navigate(['home/itemStatus',itemId]);

  }
  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
}
clear() {
  this.messageService.clear();
}

onReject() {
  this.messageService.clear('c');
}
onConfirm() {
  this.messageService.clear('c');
}
confirmPosition(position: string,itemId:number) {
  this.position = position;

  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.DeleteItem(itemId)
          this.msgs = [{severity:'warn', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      },
      key: "positionDialog"
  });
}
}

