package com.quizapp.model;

import java.util.List;

public class QuizModel {

	private int quesNo;
	private String ques;
	private List<String> options;
	private String ans;
	
	
	public QuizModel() {
		super();
	}


	/**
	 * @return the quesNo
	 */
	public int getQuesNo() {
		return quesNo;
	}


	/**
	 * @param quesNo the quesNo to set
	 */
	public void setQuesNo(int quesNo) {
		this.quesNo = quesNo;
	}


	/**
	 * @return the ques
	 */
	public String getQues() {
		return ques;
	}
	
	
	/**
	 * @param ques the ques to set
	 */
	public void setQues(String ques) {
		this.ques = ques;
	}
	
	
	/**
	 * @return the options
	 */
	public List<String> getOptions() {
		return options;
	}
	
	
	/**
	 * @param options the options to set
	 */
	public void setOptions(List<String> options) {
		this.options = options;
	}
	
	
	/**
	 * @return the ans
	 */
	public String getAns() {
		return ans;
	}
	
	
	/**
	 * @param ans the ans to set
	 */
	public void setAns(String ans) {
		this.ans = ans;
	}


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "QuizModel [quesNo=" + quesNo + ", ques=" + ques + ", options=" + options + ", ans=" + ans + "]";
	}
	
	
}
