import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberListeComponent } from './subscriber-liste.component';

describe('SubscriberListeComponent', () => {
  let component: SubscriberListeComponent;
  let fixture: ComponentFixture<SubscriberListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriberListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
