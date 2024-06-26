import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyszkiComponent } from './myszki/myszki.component';
import { FormularzComponent } from './formularz/formularz.component';

const routes: Routes = [
  {path:'myszki',component: MyszkiComponent},
  {path:'formularz',component: FormularzComponent},
  {path: '', redirectTo: 'myszki', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
