import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { JobForm, JobFormField, JobApplicant } from './job-form.model';
import { JobFormConst} from './job-from.constant';
import { Observable, zip } from 'rxjs';
import { JobformService } from './jobform.service'

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  
  jobFormContent: JobForm;   //form constant content : labels, placeholders, options, error messages
  jobForm: FormGroup;        //form group that groups together the controls/fields of our form 
  jobApplicant = {} as JobApplicant;     //applicant model , applicant information will be stored in this to send to backend
  isFormComplete:boolean;   //holds the completion status of form 
  displayAlert: boolean;    //used to display alert if form submission fails
  displayAlertMessage: string; //holds alert message to display 

  constructor(private formBuilder: FormBuilder, private jobFormService: JobformService) { 
    this.jobFormContent = JobFormConst;
    this.isFormComplete = false;
    this.displayAlert = false;
  }

  ngOnInit() {
    //get data from json or backend in case of returning applicant
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
      firstName : new FormControl(this.jobApplicant.FirstName, 
        Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*") ,Validators.minLength(2)])),

      lastName : new FormControl(this.jobApplicant.LastName, 
        Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*") ,Validators.minLength(2)])),

      street: new FormControl(this.jobApplicant.street, Validators.required),

      city: new FormControl(this.jobApplicant.city, Validators.required),

      state: new FormControl(this.jobApplicant.state, Validators.required),

      zipCode: new FormControl(this.jobApplicant.zipCode, 
        Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(5),Validators.minLength(5)])),

      country: new FormControl(this.jobApplicant.country, Validators.required)
    })

  }

  fillInCityState(zipCodeFieldData){

    if (zipCodeFieldData !== null || zipCodeFieldData !== undefined) {
        let zipCode = zipCodeFieldData.target.value;
        if (zipCode.length === 5) {
            this.jobFormService.findCityStateByZipCode(zipCode).subscribe(
            res => this.fillInCityStateSuccess(res),
            err => this.fillInCityStateErr(err))
        } else {
            //field error
            //message : Please complete inserting zip code
        }
    } else {
        
        //field error
        //message : 'Please insert zip code'
  
    }
    
  }

  fillInCityStateSuccess(res) {

      console.log(res, 'success response from city-state finder')
      if (res.city && res.state) {
          this.jobApplicant.city = res.city;
          this.jobApplicant.state = res.state;

          //zip field succc message
          //city & state filled!
        
      } else {
          //city and state not found for zip code
      }
  }

  fillInCityStateErr(err) {

    //list all type of errors to handle
    //"error_code":404,"error_msg":"Zip code \"98789\" not found."
    //other type of errors 
    console.log(err, 'error response');
    if(err.status == 404) {
      this.displayAlert=true;
      this.displayAlertMessage = err.error.error_msg;
    } else {
      this.displayAlert=true;
      this.displayAlertMessage = 'city and state not able to be found for ' + this.jobApplicant.zipCode;
    }
  }

  formSubmission(){
    console.log("form submitted")

    //check if form is valid

    if (!this.jobForm.valid) {

      this.isFormComplete = true;

    } else {

      this.isFormComplete = false;
      this.displayAlert = true;

    }    
  }

}


