import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestCallComponent } from './api-test-call/api-test-call.component';
import { ModuleWithProviders }  from '@angular/core';
import { WikiComponent } from './wiki/wiki.component'

const routes: Routes = [

  {
    path: '',
    component: ApiTestCallComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
