import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./feature_module/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule),
    //canActivate: [AuthGuard]
  },
  { 
    path: 'dashboard2', 
    loadChildren: () => import('./feature_module/dashboard2/dashboard2.module').then(m => m.Dashboard2Module) 
  },

  { 
    path: 'sopformbuilder', loadChildren: () => import('./feature_module/sopformbuilder/sopformbuilder.module').then(m => m.SopformbuilderModule) }, 
  { 
    path: '**', 
    redirectTo: '/', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
