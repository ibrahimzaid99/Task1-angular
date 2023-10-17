import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  inputValue: string = '';
  nameExists: boolean = false;
  nameRequired: boolean = false;
  ageRequired: boolean = false;
  ageInvalid:boolean = false;
  nameLengthInvalid: boolean = false;
  input2Value: number | null = null;
  studentList: { [key: string]: number|null } = {};

  
  addNewList() {
    if (this.inputValue && this.input2Value) {
      if (!this.isNameDuplicate(this.inputValue)) {
        if (this.inputValue.length > 4) {
          if (this.input2Value >= 18) {
            this.studentList[this.inputValue] = this.input2Value;
            this.inputValue = ''; 
            this.input2Value = null; 
            this.nameExists = false; 
            this.nameRequired = false; 
            this.nameLengthInvalid = false; 
            this.ageRequired = false;
            this.ageInvalid = false; 
          } else {
            this.nameExists = false;
            this.nameRequired = false;
            this.nameLengthInvalid = false;
            this.ageInvalid = true; 
          }
        } else {
          this.nameExists = false;
          this.nameRequired = false;
          this.nameLengthInvalid = true;
          this.ageInvalid = false;
        }
      } else {
        this.nameExists = true;
        this.nameRequired = false;
        this.nameLengthInvalid = false;
        this.ageInvalid = false;
      }
    } else {
      this.nameRequired = !this.inputValue;
      this.nameExists = false;
      this.nameLengthInvalid = false;
      this.ageRequired = !this.input2Value;
      this.ageInvalid = false;
    }
  }
  
  isNameDuplicate(name: string): boolean {
    return Object.keys(this.studentList).includes(name);
  }
  remove(key: string) {
    delete this.studentList[key];
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
