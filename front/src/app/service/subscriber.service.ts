
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from '../subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private baseURL="http://localhost:8080/api/v1/subscribers"

  constructor(private httpClient:HttpClient) { }

  //toDipslay all subscribers
  getSubscriberList():Observable<Subscriber[]>{
    return this.httpClient.get<Subscriber[]>(`${this.baseURL}`);
  }
   //to add a subscriber
  addSubscriber(subscriber:Subscriber):Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`,subscriber)
  }
  //to get details of the subscription by id


  getSubscriberById(id:number):Observable<Subscriber>{
    return this.httpClient.get<Subscriber>(`${this.baseURL}/${id}`)

  }
 
   updateSubscriber(id:number,subscriber:Subscriber):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,subscriber)
   }



   deleteSubscriber(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
   }





}
