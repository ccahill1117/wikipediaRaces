import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { ModuleWithProviders }  from '@angular/core';


const routes: Routes = [
  {
      path: 'apiCall',
      component: ApiTestCallComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
