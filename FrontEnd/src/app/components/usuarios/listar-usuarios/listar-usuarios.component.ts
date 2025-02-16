import { Component, Input, OnInit } from '@angular/core';
import { TemplateComponent } from "../../../shared/template/template.component";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  imports: [TemplateComponent, MatTableModule,
    MatSortModule,
    MatPaginatorModule, CommonModule, MatIconModule, RouterModule],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.scss'
})
export class ListarUsuariosComponent implements OnInit{
  
  @Input() usuario: Usuario = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: new Date()
  };
  
  usuarios: Usuario[] = [];  // Lista de usuários
  displayedColumns: string[] = ['nome', 'sobrenome', 'email', 'cpf', 'dataNascimento', 'acoes'];
  
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(dados => {
      this.usuarios = dados;
    })
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe((dados: Usuario[]) => {
      this.usuarios = dados;
    });
  }

}
