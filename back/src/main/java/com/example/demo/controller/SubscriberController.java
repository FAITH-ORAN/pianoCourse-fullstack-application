package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Subscriber;
import com.example.demo.repository.SubscriberRepository;
import com.example.demo.exception.RessourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1")
public class SubscriberController {
	
@Autowired//injection du ripo
private SubscriberRepository subscriberRepository;
//get all subscriber

@GetMapping("/subscribers")
public List<Subscriber> getAllStudents(){
	System.out.println("system d'affichage");
	return subscriberRepository.findAll();
}

//create new subscriber

@PostMapping("/subscribers")
public Subscriber createSubscriber( @RequestBody Subscriber subscriber) {
	return subscriberRepository.save(subscriber);
}


//get subscriber by id
@GetMapping("/subscribers/{id}")

public ResponseEntity<Subscriber> getSubscriberById(@PathVariable Long id) {
	Subscriber subscriber=subscriberRepository.findById(id).orElseThrow(()->new RessourceNotFoundException("L'élève  n'existe pas avec l'id:" +id));
	return ResponseEntity.ok(subscriber);
}


//update subscriber by id


@PutMapping("/subscribers/{id}")
public  ResponseEntity<Subscriber> updateSubscriber(@PathVariable Long id,@RequestBody Subscriber subscriberDetails) {
	Subscriber subscriber=subscriberRepository.findById(id).orElseThrow(()->new RessourceNotFoundException("L'élève  n'existe pas avec l'id:" +id));
	subscriber.setFirstName(subscriberDetails.getFirstName());
	subscriber.setLastName(subscriberDetails.getLastName());
	subscriber.setPhone(subscriberDetails.getPhone());
	subscriber.setEmail(subscriberDetails.getEmail());
	subscriber.setDaysOfTraining(subscriberDetails.getDaysOfTraining());
	Subscriber updateSubscriber=subscriberRepository.save(subscriber);
	
	
	return ResponseEntity.ok(updateSubscriber);
}

//delete a subscriber

@DeleteMapping("/subscribers/{id}")

public ResponseEntity<Map<String,Boolean>> deleteSubscriber(@PathVariable Long id) {
	Subscriber subscriber=subscriberRepository.findById(id).orElseThrow(()->new RessourceNotFoundException("L'élève  n'existe pas avec l'id:" +id));
	subscriberRepository.delete(subscriber);
	Map<String,Boolean> response= new HashMap<>();
	response.put("supprimé", Boolean.TRUE);
	return ResponseEntity.ok(response);
}

	
	
	
}
