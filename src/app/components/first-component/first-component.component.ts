import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  name: String = 'felipe';
  idade: number = 21;
  numeros = [1, 2, 3, 4, 5];
  carros = {
    nome: 'Polo',
    marcar: 'gol',
  };

  getName(): void {
    alert(this.name);
  }

  setName(name: string): void {
    if (name != '') this.name = name;
  }

  @Input() userIdade: number = 21;

  mostrarMensagem(name: String): void {
    alert(`bom dia ${name}`);
  }

  nomeCompleto: string = '';
  mostrarMensagemTeste() {
    alert(`bom dia ${this.nomeCompleto}`);
  }
}
