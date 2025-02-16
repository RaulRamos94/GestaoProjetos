import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCheckboxModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  showPassword = false; // Para alternar visibilidade da senha

  constructor(
    private fb: FormBuilder, 
    private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false] // Adicionando o controle do checkbox
    });
  }

  ngOnInit(): void {
    // Verificar se os dados estão no localStorage
    // const savedUser = localStorage.getItem('usuario');
    // const savedPassword = localStorage.getItem('senha');

    // if (savedUser && savedPassword) {
    //   this.loginForm.patchValue({ usuario: savedUser, senha: savedPassword, rememberMe: true });
    // }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { usuario, senha, rememberMe } = this.loginForm.value;

      // Salvar ou remover dados do localStorage
      if (rememberMe) {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('senha', senha);  // Opcional: salvar a senha
      } else {
        localStorage.removeItem('usuario');
        localStorage.removeItem('senha');
      }

      // Aqui você pode processar o login
      console.log('Login bem-sucedido!', this.loginForm.value);
      this.router.navigate(['/home'])
    } else {
      console.log('Formulário inválido!');
    }
  }
}
