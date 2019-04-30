import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable()

export class RentalshopService {

  // track maxId value, will be incremented when we create()
  maxId = 3;

  equipmentUrl = environment.equipmentUrl;

  constructor(private http: HttpClient) { }


  equipmentList = [
    {
      _id: "5cb4c741a37ddc04a8caa0a1",
      name: "ALS2000",
      brand: "Listen Technology",
      model: "T6000",
      serialNumber: "7890123",
      price: 20.25,
      imageUrl: "/images/listen",
      createdAt: "2019-04-15T18:02:41.894Z",
      "__v": 0
    },
    {
      _id: "5cb4cdd23bc0c01044ee490f",
      createdAt: "2019-04-15T18:30:42.561Z",
      "__v": 0,
      updatedAt: "2019-04-15T19:41:36.115Z",
      brand: "TDK",
      imageUrl: "/images/listen",
      model: "Ultima",
      name: "Casette345",
      price: 20.25,
      serialNumber: "7890123"
    },
    {
      _id: "5cb4cec340a65510993db305",
      createdAt: "2019-04-15T18:34:43.962Z",
      "__v": 0,
      updatedAt: "2019-04-15T19:41:12.445Z",
      brand: "Mackentoch",
      imageUrl: "/images/tube",
      model: "Ultima",
      name: "sound_system2234",
      price: 20.25,
      serialNumber: "7890123"
    },
    {
      _id: "5cb4e4e4a37ddc04a8caa0a3",
      name: "Casette Gold",
      brand: "TDK",
      model: "T6000",
      serialNumber: "7890123",
      price: 20.25,
      imageUrl: "/images/tube",
      createdAt: "2019-04-15T20:09:08.582Z",
      "__v": 0
    },
    {
      _id: "5cb4e536a37ddc04a8caa0a4",
      name: "Ipphone60X-7G",
      brand: "att-verizon",
      model: "AT-8800",
      serialNumber: "12345689",
      price: 200.99,
      imageUrl: "/images/telephone.jpg",
      createdAt: "2019-04-15T20:10:30.738Z",
      "__v": 0
    },
    {
      _id: "5cbd13c8a37ddc04a8caa0a7",
      createdAt: "2019-04-22T01:07:20.689Z",
      "__v": 0,
      brand: null,
      imageUrl: null,
      model: null,
      name: null,
      price: null,
      serialNumber: null
    },
    {
      _id: "5cbd1438a37ddc04a8caa0a8",
      createdAt: "2019-04-22T01:09:12.879Z",
      "__v": 0,
      brand: null,
      imageUrl: null,
      model: null,
      name: null,
      price: null,
      serialNumber: null
    },
    {
      _id: "5cbd149da37ddc04a8caa0a9",
      createdAt: "2019-04-22T01:10:53.564Z",
      "__v": 0,
      brand: null,
      imageUrl: null,
      model: "boo",
      name: null,
      price: null,
      serialNumber: null
    }
  ];

  // two basic read methods follow: list and "getOne"
  listEquipment() {
    return this.equipmentList;
  }

  getEquipment(id) {
    return this.equipmentList.find((el) => { return el._id == id });
  }

  createEquipment(equipmentObject) {
    if (!equipmentObject._id) {
      equipmentObject._id = ++this.maxId;
    }
    this.equipmentList.push(equipmentObject);
    return this.equipmentList[equipmentObject._id];
  }

  updateEquipment(id, data) {
    let equipment = this.getEquipment(id);
    if (equipment) {
      equipment = Object.assign(equipment, data);
      return equipment;
    } else {
      return null;
    }
  }

  deleteEquipment(id) {
    let equipment = this.getEquipment(id);
    if (equipment) {
      this.equipmentList = this.equipmentList.filter(el => el._id != id);
    }
  }

}
