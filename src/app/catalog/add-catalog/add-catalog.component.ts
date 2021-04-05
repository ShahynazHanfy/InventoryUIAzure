import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { ItemDocuments } from 'src/Shared/Models/ItemDocuments';
import { Item } from 'src/Shared/Models/ItemDTO';
import { SubGroup } from 'src/Shared/Models/SubGroup';
import { ItemsService } from 'src/Shared/Services/items.service';
import { SubGroupService } from 'src/Shared/Services/sub-group.service';

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.scss']
})
export class AddCatalogComponent implements OnInit {
  item: Item
  getimage: any;
  displayBasic: any
  subGroups: SubGroup[]
  fileToUpload: File;
  uploadedFiles: any[] = [];
  sortOptions: SelectItem[];
  Itemid: any = 0
  docItem: ItemDocuments
  lstoddocproj: ItemDocuments[]
  oldName2: string

  constructor(private itemService: ItemsService,
    private subGroupService: SubGroupService,
    private httpClient: HttpClient,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = false;

    this.subGroups = []
    this.lstoddocproj = []
    this.item = {
      groupName: '', id: 0, itemName: '', subGroupId: 0, subGroupName: '', photo: '', description: '',
      price: 0, bar_code: '', brand: '', serialNumber: ''
    }
    this.docItem = {
      id: 0, documentName: '', fileName: '', itemId: 0
    }
    this.getimage = environment.Domain
    this.subGroupService.GetAllSubGroup().subscribe(e => {
      e.forEach(element => {
        if (element.activation) {
          this.subGroups.push(element)
        }
      });
    })
  }
  DeleteItem(id) {
    console.log(id)
    this.itemService.deleteItem(id).subscribe(e => {
      console.log("deleted successfully")
      this.ngOnInit()
    })
  }
  changeStatus() {
    this.displayBasic = true
  }
  InsertGroup() {
    console.log(this.item)
    this.itemService.inserItem(this.item).subscribe(e => {
      this.Itemid = e
      this.docItem.itemId = this.Itemid
      console.log("idd", this.docItem.itemId)

    })
  }
  onChange(event) {
    console.log(event)
  }
  onFileSelected(files: FileList) {
    this.fileToUpload = files.item(0);
    const oldName = this.fileToUpload.name;
    this.oldName2 = oldName
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

}
