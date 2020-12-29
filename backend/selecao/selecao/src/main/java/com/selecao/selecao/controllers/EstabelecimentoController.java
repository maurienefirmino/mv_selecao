package com.selecao.selecao.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.selecao.selecao.models.Estabelecimento;
import com.selecao.selecao.models.Profissional;
import com.selecao.selecao.repositories.EstabelecimentoRepository;

@RestController
@RequestMapping("/estabelecimento")
public class EstabelecimentoController {
	
	@Autowired
	private EstabelecimentoRepository estabelecimentoRepository;
	
	@GetMapping
	public List<Estabelecimento> listEstabelecimento() {
		return estabelecimentoRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Estabelecimento store(@RequestBody Estabelecimento profissional) {
		return estabelecimentoRepository.save(profissional);
	}
	
	
	/* Achando um estabelecimento pelo ID */
	@RequestMapping("/{id}/estabelecimento")
	public Optional<Estabelecimento> find(@PathVariable("id") Long id) {
		return estabelecimentoRepository.findById(id);
	}
	
	/* Editando um estabelecimento */
	
	
	/* Deletando um profissional pelo id */
	@RequestMapping("/{id}/delete")
	public int delete(@PathVariable("id") Long id) {
		try {
			estabelecimentoRepository.deleteById(id);
		}catch(Exception e) {
			return 0;
		}
		
		return 1;
	}
}
