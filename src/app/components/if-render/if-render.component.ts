import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css',
})
export class IfRenderComponent {
  canShow: boolean = false;

  toggleShow() {
    this.canShow = !this.canShow;
  }

  mudarStatus() {
    if (this.canShow === false) {
      this.canShow = true;
    } else {
      this.canShow = false;
    }
  }
}
