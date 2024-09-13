import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-new-show-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './new-show-form.component.html',
  styleUrl: './new-show-form.component.css'
})
export class NewShowFormComponent {
    @Output()
    public newShow: EventEmitter<Show> = new EventEmitter();

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
            this.newShow.emit(newShow);
            this.form.reset();
            this.isFormSubmitted = false;
        }else{
            console.log("Faltan datos");
        }

    }

/*
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

    public ngOnChanges(changes: SimpleChanges): void{
        if(changes['inputShow'] && changes['inputShow'].currentValue){
            console.log("Va bien", this.inputShow);

            this.form.patchValue(this.inputShow);

        }
    }
  
*/
}
