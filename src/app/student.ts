import {Component} from '@angular/core';
import {AddressDTO} from "./address";

export class Student {
  public studentId: number;
  public firstName: string;
  public lastName: string;
  public email: String;
  public address : AddressDTO;
}
