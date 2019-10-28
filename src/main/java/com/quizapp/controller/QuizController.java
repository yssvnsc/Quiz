package com.quizapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quizapp.model.QuizModel;
import com.quizapp.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin
public class QuizController {

	@Autowired
	private QuizService quizService;
	
	@GetMapping("/ques")
	 public List<QuizModel> getAllUsers() {
	    return quizService.getQuiz();
	  }
	
	
	@GetMapping("/ques/{quesno}")
	public QuizModel getQuesByQuesNo(@PathVariable(value = "quesno") int quesNo){
		
		return quizService.getQuesByQuesNo(quesNo);
		
	}
}
