import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DummyComponent } from './dummy.component';

describe('DummyComponent', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
