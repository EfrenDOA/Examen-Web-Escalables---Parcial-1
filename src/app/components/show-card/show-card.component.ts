import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';
import { EditInfoComponent } from '../edit-info/edit-info.component';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass, EditInfoComponent],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Output()
  public deleteCard : EventEmitter<string> = new EventEmitter();


  @Input()
  public show: Show = {
    name: "",
    year: 0,
    episodes: 0,
    image: "",
    description: "",
    genre: "",
    likes: []
  };

  public select: boolean = false;

  public selectDesign(): void {
    this.select = !this.select;
  }

  public onDeleteCard(): void {
    //console.log("Evento desde el hijo");
    this.deleteCard.emit(this.show.name);
  }  


  @Output()
  public sendInfo : EventEmitter<Show> = new EventEmitter();

  public onSendInfo(): void {
    this.sendInfo.emit(this.show);
  }
}
