import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalshopService } from '../providers/rentalshop.service';


@Component({
  selector: 'app-equipmentdetails',
  templateUrl: './equipmentdetails.component.html',
  styleUrls: ['./equipmentdetails.component.css'],
  providers: [RentalshopService]
})
export class EquipmentdetailsComponent implements OnInit {
  // local equipmentObject fetched from RentalShopService
  equipment: any;
  // equipment image uri with server path prepended
  equipmentdisplayurl: string = '';
  // flag for edit mode
  editing: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private rentalShopService: RentalshopService) { }

  ngOnInit() {
    return this.getEquipment();
  }

  // bound to edit and cancel buttons in view
  setEditMode(mode): void {
    this.editing = (mode ? true : false);
  }


  //retreives route parameter and fetches data from data service
  getEquipment() {
    const param = this.route.snapshot.paramMap.get('id');
    //console.log('detail view id='id);
    this.equipment = this.rentalShopService.getEquipment(param);
    this.equipmentdisplayurl = this.rentalShopService.equipmentUrl + this.equipment.imageurl;

  }


  //calls update from RentalShopService using data passed from ngForm.value
  updateEquipment(obj: any): void {
    let formData = new FormData();
    this.equipment.name = obj.nameField;
    this.equipment.brand = obj.brandField;
    this.equipment.model = obj.modelField;
    this.equipment.serialNumber = obj.erialNumber;
    this.equipment.price = obj.priceField;
    this.equipment.imageUrl = obj.imageUrl;
    this.rentalShopService.updateEquipment(this.equipment._id, this.equipment)
    // .subscribe((result) => {
    location.reload();
    // });
  }

  // deletes photo using PhotoService
  deleteEquipment() {
    if (confirm(`Are you sure you want to delete ${this.equipment.name}?`)) {
      console.log(`deleting ${this.equipment._id}`);
      this.rentalShopService.deleteEquipment(this.equipment._id)
      this.router.navigate(['/gallery']);
      // .subscribe((result) => {
      //   alert(`Equipment ${this.equipment.name} has been deleted`);
      //   this.router.navigate(['/gallery']);
      // })
    }
  }

}
