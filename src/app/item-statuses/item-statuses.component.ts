import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ItemStatusEmp } from 'src/Shared/Models/ItemStatusEmp';
import { ItemStatusEmpService } from 'src/Shared/Services/item-status-emp.service';

@Component({
  selector: 'app-item-statuses',
  templateUrl: './item-statuses.component.html',
  styleUrls: ['./item-statuses.component.scss']
})
export class ItemStatusesComponent implements OnInit {
  itemId: number;
  ItemStatuses:any[]
  ItemName:string
  itemPhoto:string
  getimage: any;
  constructor(private activeRoute: ActivatedRoute,private itemStatusEmp:ItemStatusEmpService) { }

  ngOnInit(): void {
    this.getimage= environment.Domain
    this.ItemStatuses=[]
    this.itemId = Number(this.activeRoute.snapshot.params['itemId']);
    console.log(this.itemId)
    this.itemStatusEmp.GetAllStatusesByItemId(this.itemId).subscribe(e=>{
      console.log(e)
      this.ItemStatuses = e
      console.log("itemsta",this.ItemStatuses)
      this.ItemStatuses.forEach(element => {
        this.ItemName = element.itemName
        this.itemPhoto = element.photo
      });
    })
  }

}
