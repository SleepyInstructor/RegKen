import { Injectable } from '@angular/core';

@Injectable()
export class RegkenconfigService {

  private _title:String;
  constructor() {
    this._title = 'Kendo Tournment Registration';
  }
  get title():String  {
    return this._title;
  }
}
