package com.backend.backend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

public class AdministradorPersonas {
	
	@Autowired
	PersonaRepositorio personaRepositorio;
	
	public void eliminarPersona(String id) {
		Optional<Persona> personaEliminada = obtenerPersonaPorId(id);
		personaEliminada.ifPresent(persona -> personaRepositorio.delete(persona));
	}
	
	public List<Persona> obtenerTodasLasPersonas() {
		return personaRepositorio.findAll();
	}
	
	public Optional<Persona> obtenerPersonaPorId(String id) {
		return personaRepositorio.findById(id);
	}
	
	public void actualizarPersona(String id, Persona persona) {
		personaRepositorio.findById(id).ifPresent(p-> {
			p.setNombre(persona.getNombre());
			p.setEdad(persona.getEdad());;
			p.setSexo(persona.getSexo());
			personaRepositorio.save(p);
		});
	}
	
	public Persona crearPersona(Persona persona) {
		personaRepositorio.save(persona);
		return persona;
	}
}
