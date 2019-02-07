import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { ModuleWithProviders }  from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WinComponent } from './win/win.component';

const routes: Routes = [

  {
    path: 'api',
    component: ApiTestCallComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path:'win',
    component: WinComponent
  }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
