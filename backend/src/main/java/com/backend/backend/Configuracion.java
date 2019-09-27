package com.backend.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Configuracion {

	@Bean
	public AdministradorPersonas crearAdminPersonas() {
		return new AdministradorPersonas();
	}
}
