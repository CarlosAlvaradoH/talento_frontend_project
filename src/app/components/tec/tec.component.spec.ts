import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecComponent } from './tec.component';

describe('TecComponent', () => {
  let component: TecComponent;
  let fixture: ComponentFixture<TecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
