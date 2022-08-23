package com.example.demo.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Subscriber {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
   Long id;
	@Column(name="prenom")
   String firstName;
	@Column(name="nom")
   String lastName;
	@Column(name="tel")
   Integer phone;
	@Column(name="email")
   String email;
	@Column(name="jour_de_presence")
   String daysOfTraining;
	
   
   //constructor
   
   public Subscriber() {
	   super();
   }

   public Subscriber(Long id, String firstName, String lastName, Integer phone, String email, String daysOfTraining) {
	   super();
	   this.id = id;
	   this.firstName = firstName;
	   this.lastName = lastName;
	   this.phone = phone;
	   this.email = email;
	   this.daysOfTraining = daysOfTraining;
   }




   public Subscriber(String firstName, String lastName, Integer phone, String email, String daysOfTraining) {
	   super();
	   this.firstName = firstName;
	   this.lastName = lastName;
	   this.phone = phone;
	   this.email = email;
	   this.daysOfTraining = daysOfTraining;
   }


   //getter & setter 
   public Long getId() {
	   return id;
   }
   public void setId(Long id) {
	   this.id = id;
   }
   public String getFirstName() {
	   return firstName;
   }
   public void setFirstName(String firstName) {
	   this.firstName = firstName;
   }
   public String getLastName() {
	   return lastName;
   }
   public void setLastName(String lastName) {
	   this.lastName = lastName;
   }
   public Integer getPhone() {
	   return phone;
   }
   public void setPhone(Integer phone) {
	   this.phone = phone;
   }
   public String getEmail() {
	   return email;
   }
   public void setEmail(String email) {
	   this.email = email;
   }
   public String getDaysOfTraining() {
	   return daysOfTraining;
   }
   public void setDaysOfTraining(String daysOfTraining) {
	   this.daysOfTraining = daysOfTraining;
   }
   
   
   
   //toString
   @Override
   public String toString() {
	   return "Subscriber [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phone=" + phone
			   + ", email=" + email + ", daysOfTraining=" + daysOfTraining + "]";
   }

   
   

   





}
