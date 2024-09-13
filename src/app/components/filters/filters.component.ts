import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Input()
  public shows: Show[] = [];

  @Output()
  public filterSelected: EventEmitter<string> = new EventEmitter();

  public applyFilter(strFilter: string) {
    this.filterSelected.emit(strFilter);
  }
  

  /*
  public onSortAsc(): void {
    
  }

  public onSortDesc(): void {
    //
  }

  public onReverse(): void {
    //
  }

  public onReturn(): void {
    //
  }
    */
  // @Output()
  // public deleteCard : EventEmitter<string> = new EventEmitter();


  // @Input()
  // public show: Show = {
  //   name: "",
  //   year: 0,
  //   episodes: 0,
  //   image: "",
  //   description: "",
  //   genre: "",
  //   likes: []
  // };

  // public select: boolean = false;

  // public selectDesign(): void {
  //   this.select = !this.select;
  // }

  // public onDeleteCard() {
  //   //console.log("Evento desde el hijo");
  //   this.deleteCard.emit(this.show.name);
  // }  
}
