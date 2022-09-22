import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  // ...any other options you'd like to use
};

const routes: Routes = [
  // { path: 'home', component: HomeComponent, title: 'Home', },
  // { path: 'profile/:id', component: ProfileComponent },
  // { path: '404', component: NotFoundComponent, title: 'Not Found'},
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
