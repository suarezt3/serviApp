import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardClientComponent } from './components/card-client/card-client.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [

  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: FormComponent },
  { path: 'tabla', component: TableComponent },
  { path: 'cliente', component: CardClientComponent },
  { path: '**', component: TableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
