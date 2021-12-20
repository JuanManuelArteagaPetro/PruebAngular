import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { EntradaComponent } from './entrada/entrada.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {path:'entrada', component: EntradaComponent},
  {path:'bienvenido', component: BienvenidoComponent},
 { path: '**', component: HomeComponent },  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
