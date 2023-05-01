import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardClientComponent } from './components/card-client/card-client.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: 'registro', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: FormComponent, canActivate: [ AuthGuard ],
  canMatch: [ AuthGuard ] },
  { path: 'editar/:id', component: FormComponent, canActivate: [ AuthGuard ],
  canMatch: [ AuthGuard ] },
  { path: 'tabla', component: TableComponent, canActivate: [ AuthGuard ],
  canMatch: [ AuthGuard ] },
  { path: 'graficas', component: ChartComponent, canActivate: [ AuthGuard ],
  canMatch: [ AuthGuard ] },
  { path: ':id', component: CardClientComponent, canActivate: [ AuthGuard ],
  canMatch: [ AuthGuard ] },
  { path: 'graficas/:id', component: CardClientComponent, canActivate: [ AuthGuard ],
  canMatch: [ AuthGuard ] },
  { path: '**', component: TableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
