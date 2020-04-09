import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFormRoutingModule } from './job-form-routing.module';
import { JobFormComponent } from './job-form.component';


//needed to create reactive form 
import { ReactiveFormsModule } from '@angular/forms';

//needed to make api calls
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [JobFormComponent],
  imports: [
    CommonModule,
    JobFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class JobFormModule { }
