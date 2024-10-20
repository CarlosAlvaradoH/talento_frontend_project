import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { TecComponent } from './components/tec/tec.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'tec', component: TecComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' }, // Redireccionar a user por defecto
  { path: '**', redirectTo: '/content' } // Redireccionar a user si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
