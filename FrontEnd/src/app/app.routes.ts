import { Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './components/usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './shared/container/container.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrarProjetoComponent } from './components/projetos/cadastrar-projeto/cadastrar-projeto.component';
import { EditarProjetoComponent } from './components/projetos/editar-projeto/editar-projeto.component';
import { ExcluirProjetoComponent } from './components/projetos/excluir-projeto/excluir-projeto.component';
import { ListarProjetosComponent } from './components/projetos/listar-projetos/listar-projetos.component';
import { CadastrarTarefaComponent } from './components/tarefas/cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './components/tarefas/editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './components/tarefas/excluir-tarefa/excluir-tarefa.component';
import { ListarTarefasComponent } from './components/tarefas/listar-tarefas/listar-tarefas.component';
import { EditarUsuarioComponent } from './components/usuarios/editar-usuario/editar-usuario.component';
import { ExcluirUsuarioComponent } from './components/usuarios/excluir-usuario/excluir-usuario.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { TemplateComponent } from './shared/template/template.component';

export const routes: Routes = [

   { path: '', redirectTo: 'login', pathMatch: 'full'},
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   { path: 'template', component: TemplateComponent },
   
   { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
   { path: 'listar-usuarios', component: ListarUsuariosComponent },
   { path: 'editar-usuario/:id', component: EditarUsuarioComponent },
   { path: 'excluir-usuario/:id', component: ExcluirUsuarioComponent },
   
   { path: 'cadastrar-projeto', component: CadastrarProjetoComponent },
   { path: 'listar-projetos', component: ListarProjetosComponent },
   { path: 'editar-projeto', component: EditarProjetoComponent },
   { path: 'excluir-projeto', component: ExcluirProjetoComponent },
   
   { path: 'cadastrar-tarefa', component: CadastrarTarefaComponent },
   { path: 'listar-tarefas', component: ListarTarefasComponent },
   { path: 'editar-tarefa', component: EditarTarefaComponent },
   { path: 'excluir-tarefa', component: ExcluirTarefaComponent },
   
   { path: 'container', component: ContainerComponent },
   { path: 'sidenav', component: SidenavComponent },
];
