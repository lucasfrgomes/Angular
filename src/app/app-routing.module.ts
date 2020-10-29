import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UpdateComponent } from './users/update/update.component'

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/getUser/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }