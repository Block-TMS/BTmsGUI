import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user/', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user-gui/user-gui.module').then(m => m.UserGuiModule) },
  { path: 'worker', loadChildren: () => import('./worker-gui/worker-gui.module').then(m => m.WorkerGuiModule) }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
