import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TemplateComponent } from '../../../shared/template/template.component';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  imports: [FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    TemplateComponent],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.scss'
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = {
    idUsuario: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: new Date()
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('idUsuario'))
    console.log("Id Selecionado", id)
    this.usuarioService.buscarUsuarioPorId(id).subscribe((usuario) => {
      this.usuario = usuario;
      console.log("Usuario Carregado", this.usuario)
    });
  }

  editar() {
    this.usuarioService.editarUsuario(this.usuario).subscribe(() => {
      alert("Alteração salva!")
      this.router.navigate(['/listar-usuarios'])
    })
  }
}
