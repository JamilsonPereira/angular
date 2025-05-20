import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.css'
})
export class ListaComprasComponent {
  nomeItem : string = ''
  lista: ItemLista[] = [];
  adicionarProduto(){
   
    let itemlista = new ItemLista;
    itemlista.nome = this.nomeItem;
    itemlista.id = this.lista.length + 1;

    this.lista.push(itemlista);

    this.nomeItem = '';

    console.table(this.lista)
  }
}
