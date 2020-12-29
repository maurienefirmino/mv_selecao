package com.selecao.selecao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.selecao.selecao.models.Funcao;

@Repository
public interface FuncaoRepository extends JpaRepository<Funcao,Long>{

}
