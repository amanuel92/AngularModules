import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { JobForm, JobFormField, JobApplicant } from './job-form.model';
import { JobFormConst} from './job-from.constant';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  
  jobFormContent: JobForm;   //form constant content : labels, placeholders, options, error messages
  jobForm: FormGroup;        //form group that groups together the controls/fields of our form 
  jobApplicant = {} as JobApplicant;     //applicant model , applicant information will be stored in this to send to backend
  isFormComplete:boolean;   //holds the completion status of form 


  constructor(private formBuilder: FormBuilder) { 
    this.jobFormContent = JobFormConst;
    this.isFormComplete = false;
  }

  ngOnInit() {
    //get data from json or backend in case of edit 
    this.getJobApplicant()
    this.createForm();
  }

  getJobApplicant(){
    this.jobApplicant.FirstName = '';
    this.jobApplicant.LastName = '';
    this.jobApplicant.street = '';
    this.jobApplicant.city = '';
    this.jobApplicant.state = '';
    this.jobApplicant.zipCode = '';
    this.jobApplicant.country = '';
  }
  
  

  createForm(){

    this.jobForm = this.formBuilder.group({
      firstName : new FormControl(this.jobApplicant.FirstName, Validators.required),
      lastName : new FormControl(this.jobApplicant.LastName, Validators.required),
      street: new FormControl(this.jobApplicant.street, Validators.required),
      city: new FormControl(this.jobApplicant.city, Validators.required),
      state: new FormControl(this.jobApplicant.state, Validators.required),
      zipCode: new FormControl(this.jobApplicant.zipCode, Validators.required),
      country: new FormControl(this.jobApplicant.country, Validators.required)
    })

  }


  formSubmission(){
    console.log("form submitted")
    this.isFormComplete = true;
  }

}


