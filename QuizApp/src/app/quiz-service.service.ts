import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  @Output()
  result:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }
}
