import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  items: { text: string, checked: boolean } [] = [];

  ngOnInit(): void {
  }

  constructor() {
  }

  Todo(): void {

    // Create a "close" button and append it to each list item
    var todoList = document.getElementById("myUL");
    if (todoList != null) {
      var myNodelist = todoList.childNodes;

      if (myNodelist != null) {
        for (let i = 0; i < myNodelist.length; i++) {
          const childNode = myNodelist[i] as HTMLElement;
          console.log(childNode.childNodes.length);
          {
            console.log("inside");
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
          }

        }
      }
    }




    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        const div = close[i].parentElement;
        if (div != null) {
          div.style.display = "none";
        }
      });
    }

    var checkList = document.getElementsByTagName("LI");
    for (let i = 0; i < checkList.length; i++) {
      checkList[i].addEventListener("click", function () {
        checkList[i].classList.toggle("checked");
      })
    }
  }


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
