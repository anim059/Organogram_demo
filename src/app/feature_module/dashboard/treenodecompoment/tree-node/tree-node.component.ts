import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() node:any;
  done : {id:number;name:string;}[] = [];
  moveItem: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.node)
    this.moveItem = this.done.length;
  }

  drop(event: CdkDragDrop<{id:number;name:string;}[]>) {
    if(this.node.role != 'Sr.Engr' && this.done.length>=1){
      return;
    }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log("done");
      console.log("node" + this.node.role );
      console.log( event.container.data[0]);
  
  }
  

}
