package com.selecao.selecao.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.selecao.selecao.models.Vinculo;
import com.selecao.selecao.repositories.VinculoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/vinculo")
public class VinculoController {
	@Autowired
	private VinculoRepository vinculoRepository;
	
	@GetMapping
	public List<Vinculo> listVinculo() {
		return vinculoRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Vinculo store(@RequestBody Vinculo vinculo) {
		return vinculoRepository.save(vinculo);
	}
	
	/* Achando um vinculo pelo ID */
	@RequestMapping("/{id}/vinculo")
	public Optional<Vinculo> find(@PathVariable("id") Long id) {
		return vinculoRepository.findById(id);
	}
	
	
	/* Deletando um profissional pelo id */
		@DeleteMapping("/{id}/delete")
		public ResponseEntity<Map<String, Boolean>> deleteEstabelecimento(@PathVariable Long id){
			Vinculo vinculo = null;
			try {
				vinculo = vinculoRepository.findById(id)
						.orElseThrow(() -> new Exception("Estabelecimento não encontrado com o id:" + id));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			vinculoRepository.delete(vinculo);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
	
}
