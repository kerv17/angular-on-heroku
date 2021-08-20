import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JungleFighterComponent } from './jungle-fighter.component';

describe('JungleFighterComponent', () => {
  let component: JungleFighterComponent;
  let fixture: ComponentFixture<JungleFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JungleFighterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JungleFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
