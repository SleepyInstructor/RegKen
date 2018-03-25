import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoRepresentativeComponent } from './dojo-representative.component';

describe('DojoRepresentativeComponent', () => {
  let component: DojoRepresentativeComponent;
  let fixture: ComponentFixture<DojoRepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojoRepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
