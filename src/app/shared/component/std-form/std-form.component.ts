import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdForm ! : FormGroup;

  constructor(
    private _stdServeice: StudentService,
    private _uuidService: UuidService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.stdForm= new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required])
    })
  };

  onFormSubmit(){
    console.log(this.stdForm.value);
    
    let obj = {
      ...this.stdForm.value,
        id: this._uuidService.uuid()
    }
    console.log(obj);
    this._stdServeice.addStudent(obj)
    this.stdForm.reset()
  }

}
