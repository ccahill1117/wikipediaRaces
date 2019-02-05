import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { ModuleWithProviders }  from '@angular/core';
import { WikiComponent } from './wiki/wiki.component'
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {
    path: 'call',
    component: ApiTestCallComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }




];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
