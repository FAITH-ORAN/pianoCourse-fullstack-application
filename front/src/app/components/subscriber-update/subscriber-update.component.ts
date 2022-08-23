import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriberService } from 'src/app/service/subscriber.service';
import { Subscriber } from '../../subscriber';

@Component({
  selector: 'app-subscriber-update',
  templateUrl: './subscriber-update.component.html',
  styleUrls: ['./subscriber-update.component.css']
})
export class SubscriberUpdateComponent implements OnInit {
  id!:number;
  subscriber:Subscriber=new Subscriber();

  days = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]

  constructor(private subscriberService:SubscriberService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.subscriberService.getSubscriberById(this.id).subscribe(data=>{
      this.subscriber=data;
      console.log(this.subscriber.email)
    },err=>console.log(err));
  }

  onSubmit(){
     this.subscriberService.updateSubscriber(this.id,this.subscriber).subscribe(data=>{
      this.goToSubscriberList();
     },err=>console.log(err));
  }
  goToSubscriberList(){
    this.router.navigate(['/subscriber']);
  }

}
