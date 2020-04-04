import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFormRoutingModule } from './job-form-routing.module';
import { JobFormComponent } from './job-form.component';


//needed to create reactive form 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [JobFormComponent],
  imports: [
    CommonModule,
    JobFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class JobFormModule { }
