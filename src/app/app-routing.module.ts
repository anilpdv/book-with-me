import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rentals',
    pathMatch: 'full'
  },
  {
    path: 'temp',
    component: TempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
