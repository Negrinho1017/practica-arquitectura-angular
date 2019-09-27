package com.backend.backend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PERSONA")
public class Persona {
	
	@Id
	private String id;
	
	@Column(name="NOMBRE", length=50, nullable=false, unique=false)
	private String nombre;
	
	@Column(name="EDAD", length=50, nullable=false, unique=false)
	private int edad;
	
	@Column(name="SEXO", length=50, nullable=false, unique=false)
	private String sexo;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

}
