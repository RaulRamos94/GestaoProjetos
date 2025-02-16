import { Component } from '@angular/core';
import { Usuario } from '../Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { TemplateComponent } from "../../../shared/template/template.component";
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excluir-usuario',
  imports: [FormsModule, TemplateComponent, MatButton],
  templateUrl: './excluir-usuario.component.html',
  styleUrl: './excluir-usuario.component.scss'
})
export class ExcluirUsuarioComponent {

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
        private router: Router,
        private route: ActivatedRoute
      ) {}
  
      ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.usuarioService.buscarUsuarioPorId(parseInt(id!)).subscribe((usuario) => {
          this.usuario = usuario;
          console.log("Usuario", id, "excluido")
        });
      }

      excluir(){
        if(this.usuario.id){
          this.usuarioService.excluirUsuario(this.usuario.id).subscribe(() => {
            alert("Usuario excluído com sucesso!")
            this.router.navigate(['/listar-usuarios'])
          })
      }
    }
}
