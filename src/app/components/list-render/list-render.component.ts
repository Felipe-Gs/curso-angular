import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  dados = ['Felipe gomes', 'luana gomes', 'Railda Gomes', 'Odilon Firmuino'];
  animais = [{ name: 'Dog' }, { name: 'cat' }];

  dadosObj = { nome: 'Felipe', idade: 30, cidade: 'São Paulo' };
}
