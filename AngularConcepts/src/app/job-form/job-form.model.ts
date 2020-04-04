export interface JobForm {
    FirstName: JobFormField;
    LastName: JobFormField;
    Street: JobFormField;
    City: JobFormField;
    State: JobFormField;
    ZipCode: JobFormField;
    Country: JobFormField;
    Position: JobFormField;
    YearsOfExperience: JobFormField;

}
export interface JobFormField {
    Label: string;
    PlaceHolder : string;
    ErrorMessage : string;
    Options: any [];
}
export interface JobApplicant {
    FirstName: string;
    LastName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    position: string;
    yearsOfExperience: string;
    level: string;
    salaryRange: string;
    local: string;
}

