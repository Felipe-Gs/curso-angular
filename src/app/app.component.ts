import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username = 'gomes';
  userIdade = 21;
  title = 'curso-angular';

  userData = {
    email: 'felipe123@gmail.com',
    password: '123',
  };

  teste12 = 'teste12';
}
