import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { MatInputModule } from '@angular/material/input';


import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environment';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted: boolean = false; 
  formError: boolean = false;
  formSuccess: boolean = false; 
  
  serviceID: string = environment.SERVICE;
  templateID: string = environment.TEMPLATE;
  public: string = environment.PUBLIC;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿąćęłńóśźżĄĆĘŁŃÓŚŹŻ\\s-]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿąćęłńóśźżĄĆĘŁŃÓŚŹŻ\\s-]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
      // topic: ['', Validators.required],
      contactPreference: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      rodoConsent: [false, Validators.requiredTrue]
    })
      this.contactForm.valueChanges.subscribe(() => {
    if (this.formSubmitted && this.contactForm.valid) {
      this.formError = false; // Ukryj komunikat o błędzie, jeśli formularz został poprawiony
    }
  });
  }

  onSubmit() {
    this.contactForm.markAllAsTouched(); // Oznacza wszystkie pola jako touched
    if (this.contactForm.invalid) {
      this.formError = true; // Pokaż komunikat o błędzie
      this.formSuccess = false; // Ukryj komunikat sukcesu
      return;
    }
  
    // Jeśli formularz jest poprawny, ukryj komunikat o błędzie
    this.formError = false;
    console.log(this.contactForm.value);
    this.formSuccess = true;

    const formData = {
      name: this.contactForm.value.name,
      surname: this.contactForm.value.surname,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      // topic: this.contactForm.value.topic,
      contactPreference: this.contactForm.value.contactPreference,
      message: this.contactForm.value.message
    };

    emailjs.send(environment.SERVICE, environment.TEMPLATE, formData ,environment.PUBLIC)
    .then(() => {
        this.contactForm.reset();
         this.formSubmitted = false;      // resetuje stan kliknięcia
      // schowaj komunikat po 5 sekundach
      setTimeout(() => {
        this.formSuccess = false;
      }, 4000); // Reset the form fields
      },
      (error:any) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      });
    
  }

}
