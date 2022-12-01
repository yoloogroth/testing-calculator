import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });

});

//Resta
describe('Ui resta - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call resta method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(1);
 });

 it('Should set operator1 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

  // Act 
  inputElement.value = '2';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator1).toEqual(2);
 });

 it('Should set operator2 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

  // Act 
  inputElement.value = '71';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator2).toEqual(71);
});

 it('should restar operator1 and operator2 when i click the resta button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let restaButton = fixture.debugElement.query(By.css('.substraction-button'));

  // Act
  restaButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(2.5);

 });

 it('Should render resta in result div', () => {
  // Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  // Act
  component.addition();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('0');

});

});

//Division
describe('Ui division - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call division method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 4;
    component.operator2 = 2;

    // Act
    component.division();
    result = component.result;

    // Assert
    expect(result).toBe(2);
 });

 it('Should set operator1 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

  // Act 
  inputElement.value = '2';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator1).toEqual(2);
 });

 it('Should set operator2 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

  // Act 
  inputElement.value = '71';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator2).toEqual(71);
});

 it('should restar operator1 and operator2 when i click the resta button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let restaButton = fixture.debugElement.query(By.css('.div-button'));

  // Act
  restaButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(2);

 });

 it('Should render div in result div', () => {
  // Arrange
  component.operator1 = 6;
  component.operator2 = 2;

  // Act
  component.division();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('3');

});

});

//Multiplicacion
describe('Ui mul - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should mul division method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.multiplication();
    result = component.result;

    // Assert
    expect(result).toBe(4);
 });

 it('Should set operator1 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

  // Act 
  inputElement.value = '2';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator1).toEqual(2);
 });

 it('Should set operator2 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

  // Act 
  inputElement.value = '71';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator2).toEqual(71);
});

 it('should mul operator1 and operator2 when i click the mul button ', () => {
  // Arrange 
  component.operator1 = 5;
  component.operator2 = 3;
  let mulButton = fixture.debugElement.query(By.css('.mul-button'));

  // Act
  mulButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(15);

 });

 it('Should render mult in result div', () => {
  // Arrange
  component.operator1 = 6;
  component.operator2 = 2;

  // Act
  component.multiplication();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('12');

});

});

//Exponente
describe('Ui exp - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should exp division method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.exp();
    result = component.result;

    // Assert
    expect(result).toBe(4);
 });

 it('Should set operator1 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

  // Act 
  inputElement.value = '2';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator1).toEqual(2);
 });

 it('Should set operator2 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

  // Act 
  inputElement.value = '71';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator2).toEqual(71);
});

 it('should exp operator1 and operator2 when i click the exp button ', () => {
  // Arrange 
  component.operator1 = 5;
  component.operator2 = 3;
  let expButton = fixture.debugElement.query(By.css('.exp-button'));

  // Act
  expButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(125);

 });

 it('Should render div in result div', () => {
  // Arrange
  component.operator1 = 6;
  component.operator2 = 2;

  // Act
  component.exp();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('36');

});

});