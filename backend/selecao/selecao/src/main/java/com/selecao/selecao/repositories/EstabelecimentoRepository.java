package com.selecao.selecao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.selecao.selecao.models.Estabelecimento;

@Repository
public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento,Long> {

}
