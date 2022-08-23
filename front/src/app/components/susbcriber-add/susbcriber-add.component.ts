import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SubscriberService } from 'src/app/service/subscriber.service';
import { Subscriber } from '../../subscriber';

@Component({
  selector: 'app-susbcriber-add',
  templateUrl: './susbcriber-add.component.html',
  styleUrls: ['./susbcriber-add.component.css']
})
export class SusbcriberAddComponent implements OnInit {
    subscriber:Subscriber=new Subscriber();
    days = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
  

 
  constructor(private subscriberService: SubscriberService,private router:Router) { }


  ngOnInit(): void {

  }


  saveSubscriber(){
    this.subscriberService.addSubscriber(this.subscriber).subscribe(data=>{
      console.log(data);
      this.goToSubscriberList();
    }, err =>console.log(err));
  }

  goToSubscriberList(){
    this.router.navigate(['subscriber']);
  }
  onSubmit(){
     this.saveSubscriber();

  }
 

}


