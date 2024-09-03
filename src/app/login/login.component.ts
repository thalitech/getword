import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: string = undefined;

  public senha: string = undefined;

  constructor() { }

  ngOnInit() {    
  }

  public logar() {    
    if ( (this.usuario == 'lili') && (this.senha == 'lili') ) {
      localStorage.setItem('usuario-logado', this.usuario);
    }
  }

}
