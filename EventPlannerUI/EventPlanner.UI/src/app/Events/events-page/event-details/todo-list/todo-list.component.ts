import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  items: string[] = [];

  ngOnInit(): void {
    this.Todo();
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
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          myNodelist[i].appendChild(span);
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
    
  }

  // Create a new list item when clicking on the "Add" button
  // newElement(): void {
  //   const li = document.createElement("li");
  //   let input = document.getElementById("myInput") as HTMLInputElement | null;
  //   let inputValue = input?.value;
  //   console.log("Input value: " + inputValue);

  //   input?.addEventListener("click", function (click) {
  //     console.log("test");
  //     const target = click.target as HTMLInputElement;
  //     console.log(target.value);
  //     var txt = document.createTextNode(target.value);
  //     li.appendChild(txt);

  //     let myUL = document.getElementById("myUL") as HTMLElement;

  //     if (inputValue != '') {
  //       myUL.appendChild(li);
  //     }

  //   });

  // }
  // // const myUL = document.getElementById("myUL") as HTMLElement | null;

  // // if (inputValue != null && inputValue != '') {
  // //   if (myUL != null) {
  // //     myUL.appendChild(li);
  // //   }
  // // }
  // // if (inputValue != null) {
  // //   inputValue = "";
  // // }

  // // var span = document.createElement("SPAN");
  // // var txt = document.createTextNode("\u00D7");
  // // span.className = "close";
  // // span.appendChild(txt);
  // // li.appendChild(span);

  // // var close = document.getElementsByClassName("close");
  // // for (let i = 0; i < close.length; i++) {
  // //   close[i].addEventListener("click", function () {
  // //     var div = close[i].parentElement;
  // //     if (div != null) {
  // //       div.style.display = "none";
  // //     }
  // //   });
  // // }
  // // }


}
