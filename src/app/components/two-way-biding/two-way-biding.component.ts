import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';

export interface Idata {
  nome: String;
  sobreNome: String;
  Emprego: String;
}

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrl: './two-way-biding.component.css',
})
export class TwoWayBidingComponent {
  constructor(private listService: ListService) {}

  data: Idata = {
    nome: '',
    sobreNome: '',
    Emprego: '',
  };

  tertarService = this.listService.testandoService();

  usuarios = this.listService.getDados();
  usuariosObj = this.listService.buscarDadosObjeto();
  adicionarUsuarios() {
    const nomeCompleto = `${this.data.nome} ${this.data.sobreNome}`;
    this.listService.adicionarDados(nomeCompleto);
  }

  adicionarUsuariosObg() {
    const dados = {
      nome: this.data.nome,
      sobreNome: this.data.sobreNome,
      Emprego: this.data.Emprego,
    };
    this.listService.adicionarObjeto(dados);
  }

  visible: boolean = false;

  onChangedata() {
    this.visible = !this.visible;
  }

  novoDadoObjeto() {
    this.listService.adicionarObjeto(this.data);
    this.data.nome = '';
    this.data.sobreNome = '';
    this.data.Emprego = '';
  }

  buscarDadosObj() {
    this.listService.buscarDadosObjeto();
  }
  dadosObj = this.listService.buscarDadosObjeto();
}
