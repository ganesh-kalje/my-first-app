import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  testType(event: Event) {
      setTimeout(() => {}, 2000);
      alert('dd');
  }
}
