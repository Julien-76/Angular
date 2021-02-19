import { AbstractControl, FormControl, Validators, FormsModule } from '@angular/forms';

export type FormGroup= {[key: string]: AbstractControl}

export const FormBand: FormGroup = {
   

    constructor(private formBuilder: FormBuilder) {
        this.formulaire = formBuilder.group({
        band: new FormControl(null, [Validators.required]),
        style: new FormControl(null, [Validators.required]),
        members: new FormControl(null, [])
        })
        
    }
}
