import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos =[
    {
    conteudo: 'Passo informações para o componentefilho',
    autoria: 'Pai component',
    modelo: 'modelo2'
     },
     {
      conteudo: 'Minha propriedade é decorada com @Input',
      autoria: 'FIlho component',
      modelo: 'modelo3'
       }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
