import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexterComponent } from './dexter.component';

describe('DexterComponent', () => {
  let component: DexterComponent;
  let fixture: ComponentFixture<DexterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
