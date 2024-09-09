import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,],
  template: `
    <div class="register-container">
    <h1>Contacto</h1>
    <form class="register-form"
    [formGroup] = "contactForm"
    (submit)="handleSubmit()">
      <label >Nombre:</label>
      <input 
      type="text"
       id="name" 
       formControlName="name"
       name="name"  />
       <div class= "alert alert-danger"
       [hidden]="name.valid || name.untouched">
        El Nombre es requerido.
       </div>
       <label>Apellido:</label>
       <input 
       type="text" 
      id="surname" 
      name="surname"
      formControlName="surname"  />
      <div class="alert alert-danger" 
       [hidden]="surname.valid || surname.untouched">
        El Apellido es requerido.
       </div>
      <label htmlFor="email">Email:</label>
      <input 
      type="email" 
      id="email" 
      name="email"
      formControlName="email"
      />
      <div class="alert alert-danger" 
       [hidden]="email.valid || email.untouched">
        El Email es requerido.
       </div>
      <label>Telefono</label>
      <input 
      type="number"
      id="number" 
      name="number"
      formControlName="number"
      />
      <div class="alert alert-danger" 
       [hidden]="number.valid || number.untouched">
        El Numero es requerido.
       </div>
      <div>
        <button type="submit"
        [disabled]="contactForm.invalid"
        >ENVIAR</button>
      </div>
    </form>
  </div>

  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl ('', Validators.required),
    surname: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.required),
    number: new FormControl ('', Validators.required)
  });

  get name(){
    return this.contactForm.get('name') as FormControl;
  }
  get surname(){
    return this.contactForm.get('surname') as FormControl;
  }
  get email(){
    return this.contactForm.get('email') as FormControl;
  }
  get number(){
    return this.contactForm.get('number') as FormControl;
  }


  handleSubmit(){
    if(this.contactForm.invalid) return alert('Please enter a valid') 
  }
}
