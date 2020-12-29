package com.selecao.selecao.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.selecao.selecao.models.Funcao;
import com.selecao.selecao.repositories.FuncaoRepository;

@RestController
@RequestMapping("/funcao")
public class FuncaoController {
	@Autowired
	private FuncaoRepository funcaoRepository;
	
	@GetMapping
	public List<Funcao> listFuncao() {
		return funcaoRepository.findAll();
	}
	
}
