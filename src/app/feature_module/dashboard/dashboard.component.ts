import { Component, OnInit, ViewChild } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatMenuTrigger } from '@angular/material/menu';

import { DepNode } from 'src/app/core/model/Organogram-System/OgDepNode';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { MatDialog } from '@angular/material/dialog';
import { DepartmentModalComponent } from '../../modal/department-modal/department-modal.component'
import { OrganogramService } from 'src/app/core/service/organogram/organogram.service';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  TREE_DATA : DepNode[] =  [
    {
      id:1,
      name: "root",
      children: [
        {
          id:1,
          name: "Frontend",
          children: [
          ],
          hasparent:true,
          parentDep:"root"
        },
        {
          id:2,
          name: "Backend",
          children: [
            {
              id:1,
              name: "part 1",
              children: [
              ],
              hasparent:true,
              parentDep:"Backend"
            },
            {
              id:2,
              name: "part 2",
              children: [
              ],
              hasparent:true,
              parentDep:"Backend"
            }
          ],
          hasparent:true,
          parentDep:"root"
        },
        {
          id:3,
          name: "ECU",
          children: [
          ],
          hasparent:true,
          parentDep:"root"
        }
      ],
      hasparent:false
    }
  ]





  departmentList :any[] = [
    {
      id: 3,
      name:"Frontend",
      parentId: "",
      children : [
        {
          id: 6,
          name : "Sr.Engr",
          parentId: 3,
          children : [
            {
              id: 7,
              name : "Jr.Engr",
              parentId: 6,
              children:[]
            },
            {
              id: 8,
              name : "Mid.Engr",
              parentId: 6,
              children:[
                {
                  id: 10,
                  name : "Engr 1",
                  parentId: 8,
                  children:[]
                },
                {
                  id: 11,
                  name : "Engr 2",
                  parentId: 8,
                  children:[]
                }
              ]
            },
            {
              id: 9,
              name : "Engr",
              parentId: 6,
              children:[]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name:"Backend",
      children : [

      ]
    },
    {
      id: 5,
      name:"ECU",
      children : [

      ]
    }
  ];




  // TREE_DATA: DepNode[] = [];
  
  treeNode :any[] = [
    
  ]

  moveItem : number = 0;
  todo :{id:number;name:string;}[]= [{id:1,name:'User 1'},{id:2,name:'User 2'},{id:3,name:'User 3'},{id:4,name:'User 4'}];
  
  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger!: MatMenuTrigger;

  
  treeControl = new NestedTreeControl<DepNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<DepNode>();

  // rc - we create an object that contains coordinates
  menuTopLeftPosition = { x: 0, y: 0 };

  // Department name //
  departmentName !: string;

  // already expanded nodes
  expandedNodes: any[] = [];

  constructor(
    public matDialog: MatDialog,
    private organogramService : OrganogramService
  ) {
    
   }

  ngOnInit(): void {
    this.showTreeHeirarchy();
    this.moveItem = this.todo.length;
  }
  showTreeHeirarchy(){
    //this.organogramService.getDepartmentData().subscribe((data:any)=>{
      this.dataSource.data = this.TREE_DATA;
    //})
  }


  hasChild = (_: number, node: DepNode) =>
    (!!node.children && node.children.length > 0);


  showDesignationHeirarchy(obj:{node:DepNode}){
    this.departmentName = obj.node.name;
    this.treeNode = [];
    console.log(obj.node.name);
    this.SelectDepartment(obj.node.name);
  }

  SelectDepartment(name:string){
    let index;
    for(var val in this.departmentList){
      if(this.departmentList[val].name === name){
        index = val;
        break;
      }
    }
    this.createNodeList(this.departmentList[Number(index)]);
    console.log(this.treeNode);
  }


  createNodeList(obj:any){
  
    let node = {
      id:obj.id.toString(),
      name:obj.name,
      parentId:obj.parentId
    }
    this.treeNode.push(node);
  
    if(obj.children===null){
      return;
    }
  
    for(var i in obj.children ){
      this.createNodeList(obj.children[Number(i)])
    }
  }
  


  onRightClick(event: MouseEvent, item: { node: DepNode }) {
    // preventDefault avoids to show the visualization of the right-click menu of the browser
    event.preventDefault();

   
    this.menuTopLeftPosition.x = event.clientX;
    this.menuTopLeftPosition.y = event.clientY;

    this.matMenuTrigger.menuData = { item: item };

    const { node } = item;

    // we open the menu
    this.matMenuTrigger.openMenu();
  }

  openDialoge(obj:{node:DepNode,action:string,datasource:any}){
    
    const dialogRef = this.matDialog.open(DepartmentModalComponent, {
      width: '350px',
      data: obj
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'success') {
        console.log(this.TREE_DATA);
        this.dataSource.data = this.TREE_DATA;
        this.showTreeHeirarchy();
      }
      if(result.event === 'Cancel'){

      }
    });
  }




  drop(event: CdkDragDrop<{id:number;name:string;}[]>) {
   
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
    console.log("done");
    console.log(event.container.data);
  
}
canDrop(){
  return this.todo && this.todo.length < 1;
}


 

}
