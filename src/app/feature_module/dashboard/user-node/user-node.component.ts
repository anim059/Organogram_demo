import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { UserNodeModalComponent } from 'src/app/modal/user-node-modal/user-node-modal.component';

@Component({
  selector: 'app-user-node',
  templateUrl: './user-node.component.html',
  styleUrls: ['./user-node.component.css']
})
export class UserNodeComponent implements OnInit {

  @Input() node:any;
  menuTopLeftPosition =  {x: '0', y: '0'} 

  @ViewChild(MatMenuTrigger, { static: true })
  matMenuTrigger!: MatMenuTrigger;

  
 
  done : {id:number;name:string;}[] = [];
  moveItem: number = 0;
  constructor(
    public matDialog: MatDialog,
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
  if(this.node.node.data.nodeId === 1){
    obj.node.root = 'root';
  }
  const dialogRef = this.matDialog.open(UserNodeModalComponent, {
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
    if(this.done.length>=1){
      return;
    }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log("done");
      console.log(this.node);
      console.log( event.container.data[0]);
  
  }

}
