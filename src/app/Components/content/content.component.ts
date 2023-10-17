import { outputAst } from '@angular/compiler';
import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Output() myEvent=new EventEmitter();

  sendData(){
    this.myEvent.emit("aali");
  }

}
