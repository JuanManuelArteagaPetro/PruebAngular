import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  title = 'To Do List Angular ';
  list:any[]=[];
  addTask(item:string){
    

    this.list.push({id:this.list.length, name:item})
    console.warn(this.list);
    

  }

  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item=>item.id!==id);
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
