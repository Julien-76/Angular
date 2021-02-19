import { AbstractControl, FormControl, Validators } from '@angular/forms';

export type FormGroupDef = {[key: string]: AbstractControl};

export const TODO_FORM_CREATE: FormGroupDef = {
    id: new FormControl(null, []),
    //formControlName: new FormControl(defaultValue, validators)
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, []),
    dueDate: new FormControl(new Date().toDateString(), [])
}