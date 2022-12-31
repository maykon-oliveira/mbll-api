import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './core/components/hero-detail/hero-detail.component';
import { HeroListComponent } from './core/components/hero-list/hero-list.component';

const routes: Routes = [
  { path: '', component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
