import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  items: string[] = [];
  newItem: string = '';
  

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1){ 
      this.items.splice(index, 1);
    }
   
  }

}


