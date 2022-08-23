import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusbcriberDatailsComponent } from './susbcriber-datails.component';

describe('SusbcriberDatailsComponent', () => {
  let component: SusbcriberDatailsComponent;
  let fixture: ComponentFixture<SusbcriberDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusbcriberDatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SusbcriberDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
