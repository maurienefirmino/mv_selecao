package com.selecao.selecao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Exception extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public Exception(String msg) {
		super(msg);
	}
}