import { Component } from '@angular/core';

interface Idata {
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
  data: Idata = {
    nome: '',
    sobreNome: '',
    Emprego: '',
  };

  visible: boolean = false;

  onChangedata() {
    this.visible = !this.visible;
  }
}
