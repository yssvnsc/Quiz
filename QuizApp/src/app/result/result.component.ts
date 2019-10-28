import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';
import { HttpClient } from '@angular/common/http';
import { QuizModel } from '../quizModel';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  quizObject=[];
  result=[];
  score:number=0;
  constructor(private service:QuizServiceService,private http:HttpClient) { }

  ngOnInit() {
    this.service.result.subscribe(
      (res)=>{
        this.result = res;

        this.http.get("http://localhost:8080/quiz/ques").subscribe(
          (dbResponse)=>{
            
            this.quizObject = <[]>dbResponse;
            for (var key in dbResponse) {
             if(dbResponse[key]['ans']==res[dbResponse[key]['quesNo']]) this.score++;
            }
          }
        )
      }
    )
  }

}
