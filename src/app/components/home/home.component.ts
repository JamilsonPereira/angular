import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = "Luffy";
  deveMostrarTitulo = false;
  submit(event: any){
      console.log(event)
  }
}
