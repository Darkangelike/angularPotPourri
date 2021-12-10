import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'root', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
