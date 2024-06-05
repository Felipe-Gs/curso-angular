import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';

export interface Animal {
  name?: string;
  type: string;
  age: number;
}
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAniamls();
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal!');
    this.animais = this.listService.remove(this.animais, animal);
  }

  // dados = ['Felipe gomes', 'luana gomes', 'Railda Gomes', 'Odilon Firmuino'];
  dados = this.listService.getDados();

  adicionarD() {
    this.listService.adicionarDados('Joao');
  }

  //usando a interface que fiz em cima
  animais: Animal[] = [
    { name: 'Dog', type: 'Domestico', age: 20 },
    { name: 'cat', type: 'Domestico', age: 2 },
  ];

  dadosObj = { nome: 'Felipe', idade: 30, cidade: 'São Paulo' };
  testandoOpipeOperator = 'Testando o pipe';

  hoje: Date = new Date();

  animals: Animal[] = [];

  getAniamls(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
