package com.backend.backend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class Controller {
	
	@Autowired
	AdministradorPersonas administradorPersonas;
	
	@CrossOrigin
	@RequestMapping(value = "/creacion-persona", method = RequestMethod.POST)
	@ResponseBody
	public Persona crearPersona(@RequestBody Persona persona) {
		return administradorPersonas.crearPersona(persona);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/consulta-persona", method = RequestMethod.GET)
	@ResponseBody
	public Optional<Persona> obtenerPersonaPorId(@RequestParam String id) {
		return administradorPersonas.obtenerPersonaPorId(id);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/consulta-todos", method = RequestMethod.GET)
	@ResponseBody
	public List<Persona> obtenerTodasLasPersonas() {
		return administradorPersonas.obtenerTodasLasPersonas();
	}
	
	@CrossOrigin
	@RequestMapping(value = "/actualizacion-persona/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public void actualizarPersona(@RequestBody Persona persona,
			@PathVariable(value = "id") String id) {
		administradorPersonas.actualizarPersona(id , persona);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/eliminacion-persona/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void eliminarPrueba(@PathVariable(value = "id") String id) {
		administradorPersonas.eliminarPersona(id);
	}
	

}
