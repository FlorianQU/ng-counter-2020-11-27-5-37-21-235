import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase count when click plus button', (): void => {
    // given
    component.count = 0;
    // when
    component.increaseCount();
    // then
    expect(component.count).toBe(1);
  });

  it('should decrease count when click minus button', (): void => {
    // given
    component.count = 1;
    // when
    component.decreaseCount();
    // then
    expect(component.count).toBe(0);
  });

  it('should disappear when count more than 10', (): void => {
    // given
    component.count = 11;
    // when
    let result = component.checkForPlus();
    // then
    expect(result).toBe(false);
  });

  it('should disappear when count less than 0', (): void => {
    // given
    component.count = -1;
    // when
    let result = component.checkForMinus();
    // then
    expect(result).toBe(false);
  });

  it('should turn green when count less than 0', (): void => {
    // given
    component.count = -1;
    // when
    let result = component.checkForGreen();
    // then
    expect(result).toBe(true);
  });

  it('should turn red when count more than 10', (): void => {
    // given
    component.count = 11;
    // when
    let result = component.checkForRed();
    // then
    expect(result).toBe(true);
  });

  it('should reset to 0 when click on reset button', (): void => {
    // given
    component.count = 11;
    // when
    component.reset();
    // then
    expect(component.count).toBe(0);
  });

});
