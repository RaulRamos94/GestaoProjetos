import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirProjetoComponent } from './excluir-projeto.component';

describe('ExcluirProjetoComponent', () => {
  let component: ExcluirProjetoComponent;
  let fixture: ComponentFixture<ExcluirProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
