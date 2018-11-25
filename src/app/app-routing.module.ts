import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TuscanyComponent } from './tuscany/tuscany.component';
import { MinnesotaComponent } from './minnesota/minnesota.component';
import { RegistryComponent } from './registry/registry.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'tuscany', component: TuscanyComponent },
  { path: 'minnesota', component: MinnesotaComponent },
  { path: 'registry', component: RegistryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
