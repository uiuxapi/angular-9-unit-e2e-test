/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

@Component({            // Host Component
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); // casuses angualr to render component instance()
  });


  it ('should highlight the first element with cyan', () => {
     
     let de =  fixture.debugElement.queryAll(By.css('p'))[0];

     expect(de.nativeElement.style.backgroundColor).toBe('cyan');

  });


  it ('should highlight the second element with default color', () => {
     
    let de =  fixture.debugElement.queryAll(By.css('p'))[1];
    // get a reference to the highlight directive applied to this debug element
    let directive = de.injector.get(HighlightDirective);      // makes test more general

    // expect(de.nativeElement.style.backgroundColor).toBe('yellow');
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
    
 });

});
