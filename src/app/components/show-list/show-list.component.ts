import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgFor } from '@angular/common';
import { ShowCardComponent } from '../show-card/show-card.component';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NgFor, ShowCardComponent],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  @Input()
  public shows: Show[] = [];

  public deleteElement(name: string): void {
    this.shows = this.shows.filter(show => show.name != name);
  }

  
  @Output()
  public inputInfo : EventEmitter<Show> = new EventEmitter();

  public onInputInfo(show: Show): void {
    this.inputInfo.emit(show);
    console.log("Llego", show);
  }
}
