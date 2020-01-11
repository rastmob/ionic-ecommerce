import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutPrimaryPage } from './layout-primary.page';

describe('LayoutPrimaryPage', () => {
  let component: LayoutPrimaryPage;
  let fixture: ComponentFixture<LayoutPrimaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPrimaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPrimaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
