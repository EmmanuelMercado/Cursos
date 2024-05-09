import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public deleteCharacter: EventEmitter<string>= new EventEmitter()


  @Input()
  public characterList: Character[] = []

  onDeleteCharacter(id:string):void{
    //TODO: Emitir el ID del personaje
    this.deleteCharacter.emit(id)
  }


}
