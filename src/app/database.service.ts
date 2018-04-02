import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {

  DojoData: Array<any>;

  getTeams() {
    return this.DojoData.map((value: any, index: number, array: any[]) => {

      return value.Dojo;
    });

  }
  constructor() { 
    this.DojoData = [{ Dojo: "A" },
    { Dojo: "B" },
    { Dojo: "C" },
    { Dojo: "D" },
    { Dojo: "E" },
    { Dojo: "F" },
    { Dojo: "G" }]
  }

}
