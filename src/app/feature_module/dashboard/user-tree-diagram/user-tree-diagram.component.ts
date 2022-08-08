import { Component, Input, OnInit } from '@angular/core';
import { Edge, Node, Layout} from "@swimlane/ngx-graph";
import * as shape from "d3-shape";
import { Employee } from 'src/app/core/model/tree/employee';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-tree-diagram',
  templateUrl: './user-tree-diagram.component.html',
  styleUrls: ['./user-tree-diagram.component.scss']
})
export class UserTreeDiagramComponent implements OnInit {

  @Input() node:any;
  @Input() departmentName : string = "";
  @Input() userRoleList : any[] = [];


  autoCenter: boolean = false; 
  center$: Subject<boolean> = new Subject();

  treeViewWidth :number = 600; 
  done : {id:number;name:string;}[] = [];
  moveItem: number = 0;
  treeNode :any[] = [
    
  ];


  public nodes: Node[] = [];
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: "TB"
  };
  public curve: any = shape.curveLinear;
  layout = "dagre";

  
  constructor() { }

  ngOnChanges(): void {
    // console.log("department Name: ", this.departmentName); // logs correct data, yay!
    // this.treeNode = [];
    // this.SelectDepartment(this.departmentName);
    
    this.treeNode = this.userRoleList;
    console.log(this.treeNode);
    this.links = [];
    this.nodes = [];
    this.storeNodeInfo(this.treeNode);
    this.createEdge(this.treeNode);
    console.log(this.nodes);
    console.log(this.links);
  }

  ngOnInit(): void {
    this.moveItem = this.done.length;
    if(screen.width <= 1280){
      this.treeViewWidth = 500;
    }else{
      this.treeViewWidth = 700;
    }
    
  }



storeNodeInfo(treeNode:any[]){
  let index = 1;
  for (const tn of treeNode) {
    const node: Node = {
      id: tn.id,
      label: tn.name,
      data : {
        nodeId : index++,
        departmentName:this.departmentName,
        color:tn.color
      }
    };

    this.nodes.push(node);
  }
}


createEdge(treeNode:any[]){
  
  for (const tn of treeNode) {
    if (!tn.parentId) {
      continue;
    }


  const edge: Edge = {
    source: tn.parentId,
    target: tn.id,
    label: "",
  };

  this.links.push(edge);
}
}

public getStyles(node: Node): any {
  return {
    "border-color": node.data.backgroundColor
  };
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
    alert("node" + this.node.role );
    console.log( event.container.data[0]);

}
}
