import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  equipmentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(equipment: string) {
    this.equipment.push(equipment);
  }

  remove(equipment: string) {
    let index = this.equipment.indexOf(equipment);
    this.equipment.splice(index, 1);
  }

  edit(item: string) {
    this.equipmentBeingEdited = item;
  }

  // save(newItem: string, item: string) {
  //   item['newItem'] = newItem;
  //   this.equipmentBeingEdited = null;
  // }
}
