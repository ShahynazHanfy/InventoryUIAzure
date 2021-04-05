import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SubGroup } from 'src/Shared/Models/SubGroup';
import { GroupsService } from 'src/Shared/Services/groups.service';
import { SubGroupService } from 'src/Shared/Services/sub-group.service';

@Component({
  selector: 'app-show-all-sub-groups',
  templateUrl: './show-all-sub-groups.component.html',
  styleUrls: ['./show-all-sub-groups.component.css']
})
export class ShowAllSubGroupsComponent implements OnInit {
  lstSubGroups: any;
  lstGroups: any;
  loading: any;
  displayBasic: any
  SubGroup: any
  SubGroupEdit: SubGroup
  SubGroupActivation: SubGroup
  SubGroupSaved: SubGroup
  uploadedFiles: any[] = [];
  maxsize: number = 100000
  displayBasic2: any;
  activation: boolean = true
  // multiple:string
  constructor(private SubGroupService: SubGroupService, private GroupService: GroupsService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.SubGroup = { id: 0, groupId: 0, groupName: '', subGroupName: '' }
    this.SubGroupService.GetAllSubGroup().subscribe(e => {
      this.lstSubGroups = e
      console.log("lstSub", this.lstSubGroups)
    })
    this.SubGroupEdit = { id: 0, subGroupName: '', groupId: 0, groupName: '', activation: true }
    this.GroupService.GetAllgroups().subscribe(res => {
      this.lstGroups = res
    })
    this.SubGroupSaved = { id: 0, subGroupName: '', groupId: 0, groupName: '', activation: true }
    this.GroupService.GetAllgroups().subscribe(res => {
      this.lstGroups = res
    })
    this.SubGroupActivation = { id: 0, subGroupName: '', groupId: 0, groupName: '', activation: true }
  }
  onDeleteRow(id: number) {
    this.SubGroupService.deleteSubGroup(id).subscribe(e => {
      // this.ngOnInit()
      this.SubGroupService.GetAllSubGroup().subscribe(e => {
        this.lstSubGroups = e
      })
    })
  }
  InsertSubGroup() {
    this.SubGroupService.inserSubGroup(this.SubGroup).subscribe(res => {
      this.ngOnInit()
    })
  }
  changeStatus() {
    this.displayBasic = true
  }
  onChange(event: any) {
    console.log(event)
  }
  onUpload(event: { files: any; }) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
  confirm(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.onDeleteRow(id)
      }
    });
  }
  public saveUsername: boolean;

  public onSaveUsernameChanged(value: boolean) {
    this.saveUsername = value;
  }
  editModalDialog(sub: SubGroup) {
    this.SubGroupEdit = sub
    console.log(this.SubGroupEdit)
    this.displayBasic2 = true;
  }
  EditSubGroup() {
    this.SubGroupService.updateSubGroup(this.SubGroupEdit.id, this.SubGroupEdit).subscribe(e => {
      this.SubGroupEdit = { id: 0, subGroupName: '', groupId: 0, groupName: '', activation: true }
      this.GroupService.GetAllgroups().subscribe(res => {
        this.lstGroups = res
      })
      this.displayBasic2 = false;

    })
  }
  Active(subG: SubGroup) {
    // this.SubGroupService.GetSubGroupById(subGID).subscribe(e=>{

    // })
    //this.activation = !this.activation
    console.log("subGAfter", subG)
    this.SubGroupService.ActiveSubGroup(subG.id, subG).subscribe(e => {
      console.log("succussfully updated")
      // this.SubGroupService.GetSubGroupById(subG.id).subscribe(e => {
      // })
    })

  }
}
