import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGraphModule } from "@swimlane/ngx-graph";
import * as d3 from 'd3';



import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TreeNodeComponent } from '../dashboard/treenodecompoment/tree-node/tree-node.component'
import { TreeDiagramComponent } from '../dashboard/tree-diagram/tree-diagram.component'
import { UserTreeDiagramComponent } from './user-tree-diagram/user-tree-diagram.component';
import { UserNodeComponent } from './user-node/user-node.component';
import { ViewOrganogramComponent } from './view-organogram/view-organogram.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    DashboardComponent ,
    TreeNodeComponent,
    TreeDiagramComponent,
    UserTreeDiagramComponent,
    UserNodeComponent,
    ViewOrganogramComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    DragDropModule,
    NgxGraphModule
  ]
})
export class DashboardModule { }
