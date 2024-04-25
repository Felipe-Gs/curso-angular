import { Component } from '@angular/core';

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
  dados = ['Felipe gomes', 'luana gomes', 'Railda Gomes', 'Odilon Firmuino'];

  //usando a interface que fiz em cima
  animais: Animal[] = [
    { name: 'Dog', type: 'Domestico', age: 20 },
    { name: 'cat', type: 'Domestico', age: 2 },
  ];

  dadosObj = { nome: 'Felipe', idade: 30, cidade: 'São Paulo' };
  testandoOpipeOperator = 'Testando o pipe';

  hoje: Date = new Date();
}
