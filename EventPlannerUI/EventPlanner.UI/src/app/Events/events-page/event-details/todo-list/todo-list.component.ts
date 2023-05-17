import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {

  items: { text: string, checked: boolean } [] = [];

  // Create a new list item when clicking on the "Add" button
  newElement(): void {
    const inputValue: { text: string, checked: boolean } = { text: (document.getElementById("myInput") as HTMLInputElement).value, checked: false}; // Get the input value from your implementation
    if (inputValue.text.length > 0) {
      console.log(inputValue);
      this.items.push(inputValue); // Add the new item to the array
      (document.getElementById("myInput") as HTMLInputElement).value = "";
    }
  }

  removeItem(item: {text: string, checked: boolean}) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  itemClicked(item: {text: string, checked: boolean}) {
    console.log("checked");
    const index = this.items.indexOf(item);
    if (index !== -1) {
      item.checked = !item.checked;
    }
  }

}
