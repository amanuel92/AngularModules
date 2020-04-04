import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobFormComponent } from './job-form.component';

const routes: Routes = [{ path: '', component: JobFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobFormRoutingModule { }
