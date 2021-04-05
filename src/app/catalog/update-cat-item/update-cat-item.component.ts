import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { ItemDocuments } from 'src/Shared/Models/ItemDocuments';
import { Item } from 'src/Shared/Models/ItemDTO';
import { SubGroup } from 'src/Shared/Models/SubGroup';
import { ItemsService } from 'src/Shared/Services/items.service';
import { SubGroupService } from 'src/Shared/Services/sub-group.service';

@Component({
  selector: 'app-update-cat-item',
  templateUrl: './update-cat-item.component.html',
  styleUrls: ['./update-cat-item.component.scss']
})
export class UpdateCatItemComponent implements OnInit {
  itemId: any
  docItem: ItemDocuments
  lstoddocproj: ItemDocuments[]

  itemObj: Item
  itemDocs: ItemDocuments[]
  showDocsList: boolean
  UploadDialog: boolean
  subGroup: SubGroup[]
  getimage: string;
  uploadedFiles: any[] = [];
  fileToUpload: File;
  oldName2: string

  constructor(private itemService: ItemsService,
    private messageService: MessageService,
    private activeRoute: ActivatedRoute,
    private subGroupService: SubGroupService,
    private httpClient: HttpClient,

  ) { }

  ngOnInit(): void {
    this.lstoddocproj = []


    this.itemDocs = []
    this.getimage = environment.Domain
    this.itemId = this.activeRoute.snapshot.params['itemId'];
    this.docItem = {
      id: 0, documentName: '', fileName: '', itemId: this.itemId
    }
    this.itemObj = {
      bar_code: '', brand: '', description: '', groupName: '', id: 0, itemName: '', photo: '', serialNumber: '', subGroupId: 0, subGroupName: '', price: 0
    }
    console.log("itemId",this.itemId)
    this.itemService.GetItemById(this.itemId).subscribe(e => {
      this.itemObj = e
      // this.itemService.getImage(this.itemObj.photo).subscribe(res=>{
      //   console.log(res)
      // })
    })
    this.ViewItemDocs(this.itemId)
    this.subGroupService.GetAllSubGroup().subscribe(res => {
      this.subGroup = res
    })
  }
  updateItem() {
    this.showTopCenter()
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
  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Updated Successfully', detail: '' });
  }

  onConfirm() {
    this.messageService.clear('tc');
  }

  onReject() {
    this.messageService.clear('tc');
  }
  ViewItemDocs(ItemId) {
    this.itemService.GetItemDocumentsItemId(ItemId).subscribe(
      e => {
        this.itemDocs = e
        console.log("itemdocs", this.itemDocs)
        this.showDocsList = true
      }
    )
  }
  makeRandom(lengthOfCode, possible) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text;
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

    this.itemObj.photo = this.fileToUpload.name;
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
  viewSingleDoc(doc) {
    var filePath = `${environment.Domain}wwwroot/ItemDocuments/${doc.fileName}`;
    window.open(filePath);
  }
  delDocument(docID: number, itemId: number) {
    this.itemService.deletedocument(docID).subscribe(res => {
      this.ViewItemDocs(itemId)
    })
  }
  Savedoctolist() {
    this.lstoddocproj.push(this.docItem);
    this.docItem = {
      id: 0, documentName: '', fileName: '', itemId: this.itemId
    };
    console.log(this.lstoddocproj);
  }

  SaveDocuentToDB() {
    console.log("this.lstoddocproj", this.lstoddocproj);

    this.itemService.PostItemDocumentsDTO(this.lstoddocproj).subscribe(e => {
      this.ngOnInit()

    })
  }
}
