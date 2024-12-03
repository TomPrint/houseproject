import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { MatInputModule } from '@angular/material/input';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formError: boolean = false;
  formSuccess: boolean = false; 
  

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿąćęłńóśźżĄĆĘŁŃÓŚŹŻ\\s-]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿąćęłńóśźżĄĆĘŁŃÓŚŹŻ\\s-]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
      topic: ['', Validators.required],
      contactPreference: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    })
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
    this.contactForm.reset();

    // Wyślij dane formularza
    console.log(this.contactForm.value);
  }

}
