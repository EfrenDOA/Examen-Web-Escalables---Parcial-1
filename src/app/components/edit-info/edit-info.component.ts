import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-info',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-info.component.html',
  styleUrl: './edit-info.component.css'
})
export class EditInfoComponent {
  @Output()
  public newShow: EventEmitter<Show> = new EventEmitter();

  @Output()
  public idShow: EventEmitter<number> = new EventEmitter();

  form: FormGroup;

  isFormSubmitted: boolean = false;

  constructor(){
      this.form = new FormGroup({
          name: new FormControl("", Validators.required),
          image: new FormControl("", Validators.required),
          description: new FormControl("", Validators.required)
      })
  }

  public createElement(): void{
      this.isFormSubmitted = true;
      if(this.form.valid){
 
          const newShow: Show = {
              description: this.form.value.description,
              episodes: 0,
              genre: "",
              image: this.form.value.image,
              likes: [],
              name: this.form.value.name,
              year: 0
          }

          //this.shows.push(newShow);
          this.idShow.emit(this.inputId);
          this.newShow.emit(newShow);
          
          this.form.reset();
          this.isFormSubmitted = false;
      }else{
          console.log("Faltan datos");
      }

  }

  @Input()
    public inputShow: Show = {
        name: '',
        description: '',
        image: '',
        year: 0,
        episodes: 0,
        likes: [],
        genre: ''
    };

    @Input()
    public inputId: number = 0;

    public ngOnChanges(changes: SimpleChanges): void{
        if(changes['inputShow'] && changes['inputShow'].currentValue){
            console.log("Va bien", this.inputShow);

            this.form.patchValue(this.inputShow);

            console.log("Id recibido:", this.inputId);

        }
    }
}
