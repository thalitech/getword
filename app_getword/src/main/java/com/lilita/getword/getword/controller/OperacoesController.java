package com.lilita.getword.getword.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false") 
public class OperacoesController {

	@RequestMapping("/esta-vivo")	
	public String index() {
		return "Estou vivo!";
	}

}
