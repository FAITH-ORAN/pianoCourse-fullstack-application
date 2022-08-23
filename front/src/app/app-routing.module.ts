import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubscriberListeComponent } from './components/subscriber-liste/subscriber-liste.component';
import { SubscriberUpdateComponent } from './components/subscriber-update/subscriber-update.component';
import { SusbcriberAddComponent } from './components/susbcriber-add/susbcriber-add.component';
import { SusbcriberDatailsComponent } from './components/susbcriber-datails/susbcriber-datails.component';

const routes: Routes = [
  {path:"subscriber",component:SubscriberListeComponent},
  {path:"subscriberAdd",component:SusbcriberAddComponent},
  {path:"subscriberUpdate/:id",component:SubscriberUpdateComponent},
  {path:"subscriberDetails/:id",component:SusbcriberDatailsComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
