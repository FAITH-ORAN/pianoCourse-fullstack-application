import { Component, OnInit } from '@angular/core';


import { Subscriber } from '../../subscriber';
import { SubscriberService } from '../../service/subscriber.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriber-liste',
  templateUrl: './subscriber-liste.component.html',
  styleUrls: ['./subscriber-liste.component.css']
})
export class SubscriberListeComponent implements OnInit {

subscribers!:Subscriber[];
  
  
  constructor(private subscriberService: SubscriberService,private router:Router) { }

  ngOnInit(): void {
      this.getSubscribers();
  }
  private getSubscribers(){
    this.subscriberService.getSubscriberList().subscribe(data=>{
      this.subscribers=data;
    })
  }
  goToAddSubForm(){
    this.router.navigate(['subscriberAdd']);
  }

  updateSubscriber(id:number){
    this.router.navigate(['subscriberUpdate',id]);
  }
  goToSubscriberList(){
    this.router.navigate(['/subscriber']);
  }

  deleteSubscriber(id:number){
    this.subscriberService.deleteSubscriber(id).subscribe(data=>{
      this.getSubscribers();
      this.goToSubscriberList();
    })
  }


  viewDetails(id:number){
    this.router.navigate(['subscriberDetails',id]);
  }
}



