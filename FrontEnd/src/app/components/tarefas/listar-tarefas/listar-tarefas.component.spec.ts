import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefasComponent } from './listar-tarefas.component';

describe('ListarTarefasComponent', () => {
  let component: ListarTarefasComponent;
  let fixture: ComponentFixture<ListarTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
