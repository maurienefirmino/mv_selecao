package com.selecao.selecao.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	public Estabelecimento store(@RequestBody Estabelecimento estabelecimento) {
		return estabelecimentoRepository.save(estabelecimento);
	}
	
	
	/* Achando um estabelecimento pelo ID */
	@RequestMapping("/{id}/estabelecimento")
	public Optional<Estabelecimento> find(@PathVariable("id") Long id) {
		return estabelecimentoRepository.findById(id);
	}
		

	/* atualizando um estabelecimento */
	@RequestMapping(value="/{id}/update",method = RequestMethod.PUT)
	public ResponseEntity<Estabelecimento> updateEstabelecimento(@PathVariable Long id, @RequestBody Estabelecimento estabelecimento1){
		Estabelecimento estabelecimentol2 = null;
		try {
			estabelecimentol2 = estabelecimentoRepository.findById(id)
					.orElseThrow(() -> new Exception("Estabelecimento não encontrado com o id :" + id));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		estabelecimentol2.setNome(estabelecimento1.getNome());
		estabelecimentol2.setEndereco(estabelecimento1.getEndereco());
		estabelecimentol2.setTelefone(estabelecimento1.getTelefone());

		
		Estabelecimento profissional3 = estabelecimentoRepository.save(estabelecimentol2);
		return ResponseEntity.ok(profissional3);
	}
	
	/* Deletando um estabelecimento pelo id */
		@DeleteMapping("/{id}/delete")
		public ResponseEntity<Map<String, Boolean>> deleteEstabelecimento(@PathVariable Long id){
			Estabelecimento estabelecimento = null;
			try {
				estabelecimento = estabelecimentoRepository.findById(id)
						.orElseThrow(() -> new Exception("Estabelecimento não encontrado com o id:" + id));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			estabelecimentoRepository.delete(estabelecimento);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
}
