import { Component, OnInit } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  //POST
  
  //id: number;
  childFirstName: string;
  childLastName: string;
  dob: string;

  parentFatherName: string;
  parentMotherName: string;
  parentMobile: string;
  parentEmailId: string;

  guardianFirstName: string;
  guardianLastName: string;
  guardianRelation: string;
  guardianMobile: string;
  guardianEmailId: string;

  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  
  enrolledclass: string;
  enrolledRoom: string;
  enrolledStartDate: string;
  enrolledEndDate: string;

  additionalDetails: string;


  registerStudent: any;


  public addStudent: Student[];

  constructor(private DataService: DataService) { }

  ngOnInit() {
  }


  onAddStudent(f: NgForm) {

    
  this.childFirstName= f.value.childFirstName;
  this.childLastName= f.value.childLastName;
  this.dob= f.value.dob;

  this.parentFatherName= f.value.parentFatherName;
  this.parentMotherName= f.value.parentMotherName;
  this.parentMobile= f.value.parentMobile;
  this.parentEmailId= f.value.parentEmailId;

  // this.guardianFirstName= f.value.guardianFirstName;
  // this.guardianLastName= f.value.guardianFirstName;
  // this.guardianRelation= f.value.guardianRelation;
  // this.guardianMobile= f.value.guardianMobile;
  // this.guardianEmailId= f.value.guardianEmailId;

  this.address= f.value.address;
  this.country= f.value.country;
  this.state= f.value.state;
  this.city= f.value.city;
  this.postalCode= f.value.postalCode;
  
  this.enrolledclass= f.value.enrolledclass;
  this.enrolledRoom= f.value.enrolledRoom;
  this.enrolledStartDate= f.value.enrolledStartDate;
  this.enrolledEndDate= f.value.enrolledEndDate;

  this.additionalDetails= f.value.additionalDetails;



    this.registerStudent = f.value;

    //POST from api student
    this.DataService.postStudent(this.registerStudent).subscribe((student) => {
      console.log(student);
      this.addStudent = student;
    });

    console.log(f.value);
    

  }


}
interface Student {
  //id: number,
  childFirstName: string,
  childLastName: string,
  dob: string,

  parentFatherName: string,
  parentMotherName: string,
  parentMobile: string,
  parentEmailId: string,

  // guardianFirstName: string,
  // guardianLastName: string,
  // guardianRelation: string,
  // guardianMobile: string,
  // guardianEmailId: string,

  address: string,
  country: string,
  state: string,
  city: string,
  postalCode: string,
  
  enrolledclass: string,
  enrolledRoom: string,
  enrolledStartDate: string,
  enrolledEndDate: string,

  additionalDetails: string
}