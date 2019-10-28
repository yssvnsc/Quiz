package com.quizapp.model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

public class QuestionMapper implements RowMapper<QuizModel> {

	@Override
	public QuizModel mapRow(ResultSet rs, int arg1) throws SQLException {
		
		QuizModel model = new QuizModel();
		model.setQuesNo(rs.getInt("QUES_NO"));
		model.setQues(rs.getString("QUES"));
		List<String> opts = new ArrayList<String>();
		opts.add(rs.getString("OPT_1"));
		opts.add(rs.getString("OPT_2"));
		opts.add(rs.getString("OPT_3"));
		opts.add(rs.getString("OPT_4"));
		
		model.setOptions(opts);
		model.setAns(rs.getString("ANS"));
		
		return model;
	}

}
