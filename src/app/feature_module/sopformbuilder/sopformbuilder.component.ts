import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sopformbuilder',
  templateUrl: './sopformbuilder.component.html',
  styleUrls: ['./sopformbuilder.component.css']
})
export class SopformbuilderComponent implements OnInit {

  TREE_DATA : any[] =  [
    {
      id:1,
      name: "root",
      children: [
        {
          id:2,
          name: "sop1",
          children: [
          ],
        },
        {
          id:3,
          name: "sop2",
          children: [
            {
              id:4,
              name: "sop3",
              children: [
              ],
            },
            {
              id:5,
              name: "sop4",
              children: [
              ],
            }
          ],
        },
        {
          id:6,
          name: "sop5",
          children: [
          ],
        }
      ],
    }
  ]


  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger!: MatMenuTrigger;

  
  treeControl = new NestedTreeControl<any>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  // rc - we create an object that contains coordinates
  menuTopLeftPosition = { x: 0, y: 0 };
  currdep:any = {};
  currNodeId:number = 0;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.currNodeId = param.id;
    })
    this.dataSource.data = this.TREE_DATA;
    console.log(this.currNodeId);
  }


  hasChild = (_: number, node: any) =>
  (!!node.children && node.children.length > 0);



  onRightClick(event: MouseEvent, item: { node: any }) {
    // preventDefault avoids to show the visualization of the right-click menu of the browser
    event.preventDefault();

   
    this.menuTopLeftPosition.x = event.clientX;
    this.menuTopLeftPosition.y = event.clientY;

    this.matMenuTrigger.menuData = { item: item };

    const { node } = item;

    // we open the menu
    this.matMenuTrigger.openMenu();
  }

  openDialoge(node:any = {}){
    this.currNodeId = node.id
    console.log(this.currNodeId);
  }

}
