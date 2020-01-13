import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyProfilePage } from './my-profile.page';

describe('MyProfilePage', () => {
  let component: MyProfilePage;
  let fixture: ComponentFixture<MyProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
