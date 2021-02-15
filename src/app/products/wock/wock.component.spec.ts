import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WockComponent } from './wock.component';

describe('WockComponent', () => {
  let component: WockComponent;
  let fixture: ComponentFixture<WockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
