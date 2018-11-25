import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinnesotaComponent } from './minnesota.component';

describe('MinnesotaComponent', () => {
  let component: MinnesotaComponent;
  let fixture: ComponentFixture<MinnesotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinnesotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinnesotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
