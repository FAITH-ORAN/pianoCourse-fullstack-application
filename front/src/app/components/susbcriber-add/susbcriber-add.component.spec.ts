import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusbcriberAddComponent } from './susbcriber-add.component';

describe('SusbcriberAddComponent', () => {
  let component: SusbcriberAddComponent;
  let fixture: ComponentFixture<SusbcriberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusbcriberAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SusbcriberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
