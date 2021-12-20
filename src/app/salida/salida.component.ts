import { Component, OnInit, Input,  Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {


  @Input() listas:any[]=[];
  @Output() salida = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  eliminar(id:number){
    this.salida.emit(id);
  }




}
