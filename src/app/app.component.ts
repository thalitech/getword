import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public logado: boolean = false;

  constructor() {
    this.logado = false;
    localStorage.removeItem('usuario-logado');

    let that = this;
    setInterval(function() { that.verificaLogin() }, 500);
  }

  private verificaLogin() {
    if ((localStorage.getItem('usuario-logado') != null)
       && (localStorage.getItem('usuario-logado') != undefined)) {
      this.logado = true;
    }
    else {
      this.logado = false;
    }
  }
}
