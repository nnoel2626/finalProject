import { Component, OnInit } from '@angular/core';
import { RentalshopService } from '../providers/rentalshop.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [RentalshopService]
})

export class GalleryComponent implements OnInit {

  // will be initialize to the length of equipmentList in ngOnInit
  numEquipment = 0;

  // Returns numEquipment - here simply to show that we can make
  //  a method call in a template expression
  getNumberOfEquipment() {
    return this.numEquipment;
  }

  // counter that will increment every time a upvote happens in a child component
  totalVotes: number = 0;
  // tracks photo most recently voted on
  mostRecentVotedOn: string = '';
  // bound to upvotedEvent of child components in app.component template
  handleUpvoted(e): void {
    console.log("app-component gets upvoted:" + e);
    this.totalVotes += 1;
    this.mostRecentVotedOn = e;
  }

  constructor(private rentalShopService: RentalshopService) {
  }

  public equipmentList = [];
  public equipmentUrl = '';


  ngOnInit() {
    this.updateEquipmentList();
    this.equipmentUrl = this.rentalShopService.equipmentUrl;

  }

  updateEquipmentList() {
    this.equipmentList = this.rentalShopService.listEquipment();
    this.numEquipment = this.equipmentList.length;
  }
}
