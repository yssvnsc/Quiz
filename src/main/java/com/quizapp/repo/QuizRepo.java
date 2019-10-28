package com.quizapp.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.quizapp.model.QuestionMapper;
import com.quizapp.model.QuizModel;

@Repository
public class QuizRepo {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
//	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
//		this.jdbcTemplate = jdbcTemplate;
//	}
	
	String GET_ALL_QUES = "select * from quizboard.quiz";
	String GET_QUES_BY_QUES_NO = "select * from quizboard.quiz where QUES_NO=?";
	
	public List<QuizModel> getQuiz(){
		
		return jdbcTemplate.query(GET_ALL_QUES, new QuestionMapper());
		
	}
	
	public QuizModel getQuesByQuesNo(int quesNo){
			
			return jdbcTemplate.queryForObject(GET_QUES_BY_QUES_NO,new Object[] { quesNo }, new QuestionMapper());
			
		}
}
