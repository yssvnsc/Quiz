import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizModel } from '../quizModel';
import { QuizServiceService } from '../quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-interface',
  templateUrl: './quiz-interface.component.html',
  styleUrls: ['./quiz-interface.component.css']
})
export class QuizInterfaceComponent implements OnInit {

  isLoading:boolean = false;
  questionNo:number=1;
  selectedOption:string=null;
  selectedAnswers={};
  noOfQuesAnswered:number=0;
  quizObject:QuizModel={
          quesNo:null,
          ans:'',
          options:[],
          ques:''
        }
  
  constructor(private http:HttpClient,private service:QuizServiceService,private router:Router) { }
  
  ngOnInit() { 
    localStorage.setItem("isAllQuesAnswered","false");
    this.http.get("http://localhost:8080/quiz/ques/"+this.questionNo).subscribe(
      res=>{this.quizObject = <QuizModel>res;}
    )
  }

  nextQuestion(){
    this.isLoading = true;
   
    this.questionNo++;
    this.http.get("http://localhost:8080/quiz/ques/"+this.questionNo).subscribe(
      res=>{
        this.quizObject = <QuizModel>res;
        this.selectedOption = this.selectedAnswers[this.questionNo];
        setTimeout(()=>this.isLoading = false,500);
        
      }
    )
  }

  prevQuestion(){
    this.isLoading = true;
    this.questionNo--;
    this.http.get("http://localhost:8080/quiz/ques/"+this.questionNo).subscribe(
      res=>{
        this.quizObject = <QuizModel>res;
        this.selectedOption = this.selectedAnswers[this.questionNo];
        setTimeout(()=>this.isLoading = false,500);
      }
    )
  }

  onSelectOption(){
  setTimeout(() => {
    this.selectedAnswers[this.questionNo] = this.selectedOption;
    this.noOfQuesAnswered = Object.keys(this.selectedAnswers).length;
  }, 1); 
  }

  onSubmit(){
   
    localStorage.setItem("allQuesAnswered","true");
    setTimeout(() => {
      this.service.result.emit(this.selectedAnswers);
    }, 1);
   
    this.router.navigate(["/result"]);
  }

}
