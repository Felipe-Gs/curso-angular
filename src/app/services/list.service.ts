import { Injectable } from '@angular/core';
import { Animal } from '../components/list-render/list-render.component';
import { Idata } from '../components/two-way-biding/two-way-biding.component';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private dados: string[] = [
    'Felipe gomes',
    'luana gomes',
    'Railda Gomes',
    'Odilon Firmuino',
  ];

  private objetoDados: Idata[] = [
    {
      nome: 'jaao',
      sobreNome: 'Gomes',
      Emprego: 'Advogado',
    },
    {
      nome: 'Felipe',
      sobreNome: 'Gomes',
      Emprego: 'Desenvolvedor',
    },
  ];

  constructor() {}

  adicionarDados(dado: string): void {
    this.dados.push(dado);
  }

  getDados(): string[] {
    return this.dados;
  }

  adicionarObjeto(novoObjeto: Idata): void {
    this.objetoDados.push(novoObjeto);
  }

  buscarDadosObjeto(): Idata[] {
    return this.objetoDados;
  }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  testandoService(): String {
    return 'Funcionando corretamente, serviço vindo do service testandoService!';
  }
}
