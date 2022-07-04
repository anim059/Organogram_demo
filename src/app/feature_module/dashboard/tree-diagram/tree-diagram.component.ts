import { Component, Input, OnInit } from '@angular/core';
import { Edge, Node,Layout } from "@swimlane/ngx-graph";
import * as shape from "d3-shape";
import { Employee } from 'src/app/core/model/tree/employee';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.scss']
})
export class TreeDiagramComponent implements OnInit {

  @Input() node:any;
  @Input() departmentName:string = "";
  @Input() departmentTreeList:any[] = [];
  @Input() employees: Employee[] = [];


  done : {id:number;name:string;}[] = [];
  moveItem: number = 0;
  treeNode :any[] = [
    
  ];



  public nodes: Node[] = [];
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: "TB",
  };
  public curve: any = shape.curveLinear;
  layout = "dagre";
  
  

  constructor() {
    
   }

  ngOnChanges(): void {
    // console.log("department Name: ", this.departmentName); // logs correct data, yay!
    // this.treeNode = [];
    // this.SelectDepartment(this.departmentName);
    
    this.treeNode = this.departmentTreeList
    this.links = [];
    this.nodes = [];
    this.storeNodeInfo(this.treeNode);
    this.createEdge(this.treeNode);
    //console.log(this.nodes);
    //console.log(this.links);
  }

  ngOnInit(): void {
    this.moveItem = this.done.length;
  }



storeNodeInfo(treeNode:any[]){
  let index = 1;
  for (const tn of treeNode) {
    const node: Node = {
      id: tn.id,
      label: tn.name,
      data : {
        nodeId : index++,
        departmentName:this.departmentName
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
