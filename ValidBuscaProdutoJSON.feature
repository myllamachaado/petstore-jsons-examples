#Author: ludmila machado
@tag
Feature: Busca de produtos utilizando JSON

	@tag1
	Scenario: Busca do produto racao no site Petz
		Given estou na pagina inicial do site Petz
		  And carrego os produtos a serem buscados no site
		 Then para todos os produtos da lista realizo a busca validando nome preco e valor de cada item
