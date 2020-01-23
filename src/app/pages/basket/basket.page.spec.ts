import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasketPage } from './basket.page';

describe('BasketPage', () => {
  let component: BasketPage;
  let fixture: ComponentFixture<BasketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
