import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { livresListComponent } from './components/livres-list/livres-list.component';
import { livreDetailsComponent } from './components/livre-details/livre-details.component';
import { AddlivreComponent } from './components/add-livre/add-livre.component';

const routes: Routes = [
  { path: '', redirectTo: 'livres', pathMatch: 'full' },
  { path: 'livres', component: livresListComponent },
  { path: 'livres/:id', component: livreDetailsComponent },
  { path: 'add', component: AddlivreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }