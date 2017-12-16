import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JemelComponent } from './jemel.component';

describe('JemelComponent', () => {
  let component: JemelComponent;
  let fixture: ComponentFixture<JemelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JemelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JemelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
