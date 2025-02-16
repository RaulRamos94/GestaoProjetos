import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public readonly Apiusuarios = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.Apiusuarios, usuario);
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.Apiusuarios);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
    // return this.http.put<Usuario>(`${this.Apiusuarios}/${idUsuario}`, usuario);
    const url = `${this.Apiusuarios}/${usuario.idUsuario}`;
    return this.http.put<Usuario>(url, usuario);
  }

  excluirUsuario(idUsuario: number): Observable<Usuario> {
    const url = `${this.Apiusuarios}/${idUsuario}`;
    return this.http.delete<Usuario>(url);
  }

  buscarUsuarioPorId(idUsuario: number): Observable<Usuario> {
    const url = `${this.Apiusuarios}/${idUsuario}`
    return this.http.get<Usuario>(url);
  }

}
