import { Component, OnInit } from '@angular/core';
import { SubGroupService } from "../../Shared/Services/sub-group.service";
import { GroupsService } from "../../Shared/Services/groups.service";
import { group } from "../../Shared/Models/Group";
import { SubGroup } from "../../Shared/Models/SubGroup";
import { FasDirective } from 'angular-bootstrap-md';
@Component({
  selector: 'app-show-group-and-sub',
  templateUrl: './show-group-and-sub.component.html',
  styleUrls: ['./show-group-and-sub.component.scss']
})
export class ShowGroupAndSubComponent implements OnInit {
  groups:group[]
  Group:group
  lstGroups: any;
  Subgroups:SubGroup[]
  FilteredSubgroups:SubGroup[]
  SubGroup: SubGroup
  SubGroupActivation: SubGroup

  loading: boolean;
  displayBasic: boolean;
  displayBasicSub: boolean;
  constructor(private groupService:GroupsService,
   private subGroupServices:SubGroupService) { }

  ngOnInit(): void {
    this.groups = []
    this.Subgroups =[]
    this.FilteredSubgroups = []
    this.groupService.GetAllgroups().subscribe(e=>{
      this.groups = e
    })
    this.loading = false;
    this.Group ={groupName:'',id:0}
    this.SubGroup = { id: 0, groupId: 0, groupName: '', subGroupName: '' ,activation:false}
    this.subGroupServices.GetAllSubGroup().subscribe(e=>{
      this.Subgroups = e
    })
    this.groupService.GetAllgroups().subscribe(res => {
      this.lstGroups = res
    })
  }
  FilterByGroupId(id:number){
    this.FilteredSubgroups = []
    this.Subgroups.forEach(element => {
      if(element.groupId == id){
        this.FilteredSubgroups.push(element)
      }
    });
  }
  InsertGroup(){
    this.groupService.inserGroup(this.Group).subscribe(res=>{
      console.log("inserted successfully")
      this.groupService.GetAllgroups().subscribe(res=>{
        this.groups = res
        console.log(res)
      })
    })
  }
  onChange(event: any) {
    console.log(event)
  }
  InsertSubGroup() {
    this.subGroupServices.inserSubGroup(this.SubGroup).subscribe(res => {
      this.ngOnInit()
      this.displayBasicSub=false

    })
  }
  changeStatus(){
    this.displayBasic=true
  }
  changeStatusSubGroup(){
    this.displayBasicSub=true

  }
}
