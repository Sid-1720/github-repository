import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos=[{
    label: "Study For Sessionals"
  },
{
  label:"Maths"
},
{
  label:"OS"
},
{
  label:"CN"
}];
lengthoflist=this.todos.length;
  constructor(private shared : SharedService) { }

  ngOnInit(): void {
    this.shared.setMessage(this.lengthoflist)
  }

}