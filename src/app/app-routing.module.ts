import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'peliculas',component:PeliculasComponent},
  {path:'carrito',component:CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
