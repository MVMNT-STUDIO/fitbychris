import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'training',
    loadChildren: () => import('./pages/training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'abonnements',
    loadChildren: () => import('./pages/abonnements/abonnements.module').then( m => m.AbonnementsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ueber-mich',
    loadChildren: () => import('./pages/ueber-mich/ueber-mich.module').then( m => m.UeberMichPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
