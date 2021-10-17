import { Component, OnInit } from '@angular/core';
 
function hello() {
  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   hello();
  }
  title = 'protf';
}
