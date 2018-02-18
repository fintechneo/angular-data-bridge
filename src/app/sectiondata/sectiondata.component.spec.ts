import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiondataComponent } from './sectiondata.component';

describe('SectiondataComponent', () => {
  let component: SectiondataComponent;
  let fixture: ComponentFixture<SectiondataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectiondataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
