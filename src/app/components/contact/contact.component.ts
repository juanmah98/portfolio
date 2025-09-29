import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Mensaje enviado! Te contactaré pronto.');
    
    // Limpiar el formulario
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
