import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TemplateComponent } from "../../../shared/template/template.component";


@Component({
  selector: 'app-cadastar-usuario',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    TemplateComponent
],
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.scss'
})
export class CadastrarUsuarioComponent implements OnInit{
  
  usuario: Usuario = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: new Date()
  };

    constructor(
      private usuarioService: UsuarioService,
      private router: Router
     ){}

  ngOnInit(): void {
  }

  cadastrar(){
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(() => {
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/listar-usuarios']);
    });
  }

 
}
