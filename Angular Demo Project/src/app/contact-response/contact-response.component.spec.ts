import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactResponseComponent } from './contact-response.component';

describe('ContactResponseComponent', () => {
  let component: ContactResponseComponent;
  let fixture: ComponentFixture<ContactResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
