import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p3';
  cv(){
  
    window.open("https://drive.google.com/file/d/1uEmEZYNUqdaD82eKPBAoOD-pSk0Y-Dno/view?usp=sharing")
    }
}
