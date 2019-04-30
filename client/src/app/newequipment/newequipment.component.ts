import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { RentalshopService } from '../providers/rentalshop.service';

@Component({
  selector: 'app-newequipment',
  templateUrl: './newequipment.component.html',
  styleUrls: ['./newequipment.component.css']
})
export class NewequipmentComponent implements OnInit {
  // When a new equipment is created, we'll send an event to the parent
  //  to refresh its equipmentList
  @Output() newEquipment = new EventEmitter();

  // equipment object, bound to the form fields
  equipment: any = {}

  fileToUpload: File = null;

  constructor(private rentalShopService: RentalshopService) { }

  // will be used to clear this field later
  fileInputField = null;


  handleFileInput(target): void {
    this.fileToUpload = target.files.item(0);
    this.fileInputField = target;
  }

  ngOnInit() { }

  // called onSubmit
  save(newequipmentForm): void {

    let formData = new FormData();
    // formData.append('image', this.fileToUpload, this.fileToUpload.name);
    formData.append('name', this.equipment.name);
    formData.append('brand', this.equipment.brand);
    formData.append('model', this.equipment.model);
    formData.append('serialNumber', this.equipment.serialNumber);
    formData.append('price', this.equipment.price);
    formData.append('imageUrl', this.equipment.imageUrl);
    console.log("submitting");
    this.rentalShopService.createEquipment(formData)

  }
}
