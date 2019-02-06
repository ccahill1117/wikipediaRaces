import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { ModuleWithProviders }  from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  {
    path: 'api',
    component: ApiTestCallComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },



];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
