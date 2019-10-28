package com.quizapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.model.QuizModel;
import com.quizapp.repo.QuizRepo;

@Service
public class QuizService {

	@Autowired
	private QuizRepo quizRepo;
	
	public List<QuizModel> getQuiz(){
		System.out.println("service");
		return quizRepo.getQuiz();
	}
	
	public QuizModel getQuesByQuesNo(int quesNo){
		
		return quizRepo.getQuesByQuesNo(quesNo);
		
	}
}
