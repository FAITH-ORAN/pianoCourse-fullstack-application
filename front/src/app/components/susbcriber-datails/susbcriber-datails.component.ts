import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriberService } from 'src/app/service/subscriber.service';
import { Subscriber } from '../../subscriber';

@Component({
  selector: 'app-susbcriber-datails',
  templateUrl: './susbcriber-datails.component.html',
  styleUrls: ['./susbcriber-datails.component.css']
})
export class SusbcriberDatailsComponent implements OnInit {
   id!:number;
   subscriber!:Subscriber;
  constructor(private route:ActivatedRoute,private subscriberService:SubscriberService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.subscriber=new Subscriber();
    this.subscriberService.getSubscriberById(this.id).subscribe(data=>{
      this.subscriber=data;
    })
  }

}
