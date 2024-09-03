import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/timeout'
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public prefixoIp: string = '192.168.0';

  public maquinasVisiveis: Array<string> = []

  constructor(private http: Http) {
  }


  public buscarMaquinas() {
    this.maquinasVisiveis = [];

    for (let i = 2; i < 255; i++) {
      let ip: string = this.prefixoIp + '.' + i;

      console.log('Buscando pela maquina: ' + ip);

      this.http.get('http://' + ip + ':8080/esta-vivo')
        .timeout(2000)  // ESPERA NO MAXIMO 1000 MILISEGUNDOS pela resposta
        .subscribe(dat => {
          if (dat.status = 200) {
            this.maquinasVisiveis.push(ip);
          }
        }, err => { });
    }
  }

  ngOnInit() {
  }

  public logout() {
    localStorage.removeItem('usuario-logado');
  }

}
