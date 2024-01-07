import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: '/main', pathMatch: 'full'},
      { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
    ]
  },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
