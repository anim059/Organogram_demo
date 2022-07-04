import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { NodeModalComponent } from 'src/app/modal/node-modal/node-modal.component';


@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  menuTopLeftPosition =  {x: '0', y: '0'} 

  @ViewChild(MatMenuTrigger, { static: true })
  matMenuTrigger!: MatMenuTrigger;

  
  @Input() node:any;
  done : {id:number;name:string;}[] = [];
  moveItem: number = 0;

  constructor(
    public matDialog: MatDialog,
    //private organogramService : OrganogramService
  ) { }

  ngOnInit(): void {
    console.log(this.node)
    this.moveItem = this.done.length;
  }


  onRightClick(event: MouseEvent, item: any) { 
    // preventDefault avoids to show the visualization of the right-click menu of the browser 
    event.preventDefault(); 
    
    // we record the mouse position in our object 
    this.menuTopLeftPosition.x = 100 + 'px'; 
    this.menuTopLeftPosition.y = 100 + 'px'; 

    // we open the menu 
    // we pass to the menu the information about our object 
    this.matMenuTrigger.menuData = {item: item} 

    // we open the menu 
    this.matMenuTrigger.openMenu(); 

} 


opendialoge(obj:{node:any}){
  const dialogRef = this.matDialog.open(NodeModalComponent, {
    width: '350px',
    data: obj
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result.event === 'success') {
      
    }
    if(result.event === 'Cancel'){

    }
  });
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
