import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lista:string[]=['ANGULAR','rEACT'];
  nuevoLenguaje:string='';

  constructor() { }

  ngOnInit() {
  }

  onADD():void{
    this.lista.push(this.nuevoLenguaje);

  }

}
