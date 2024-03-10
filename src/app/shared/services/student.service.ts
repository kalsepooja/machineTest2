import { Injectable } from '@angular/core';
import { Istd } from '../const/std';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentObj ! : Istd

  studentArray : Array<Istd> = [
    {
      fname: 'jhon',
      lname: 'doe',
      email: 'jd@gmail.com',
      contact: 79873277897,
      id: '1'
    }
  ]

  constructor() { };

  getStdArray(){
    return this.studentArray
  };

  addStudent(stdObj: Istd){
    console.log(stdObj);
    this.studentArray.push(stdObj);
  };

  editStd(id: string, stdObj:Istd){
    let studentObj = this.studentArray.find(ele => {
      if(ele.id === id){
        console.log(stdObj); 
      }
    })
    // console.log(studentObj);
    
  }

  deleteStd(id: string){
    let getId = this.studentArray.findIndex(ele => ele.id === id);
    this.studentArray.splice(getId,1);
  }
}
