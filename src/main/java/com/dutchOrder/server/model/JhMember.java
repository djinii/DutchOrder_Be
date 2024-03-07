package com.dutchOrder.server.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
public class JhMember {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private 	int 		mnum;
	private 	String 		memail;
	private 	String 		mpw;
	private 	String 		mname;
	private		String		mtel;
	private		String		mnic;
	private		int			mgroup_makey;	// 
	private		int			mgroup_mikey;	// 101 개인 102 사업자 103 관리자 
	private		int			mstatus_makey;	//
	private		int			mstatus_mikey;	// 201 유효회원 202 탈퇴회원 
	private		Date		hiredate;
	
	public String getName() {
		return this.mname;
	}
	

}
