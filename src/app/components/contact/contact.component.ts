import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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

  isLoading = false;
  showSuccess = false;
  showError = false;
  errorMessage = '';
  cvUrl = 'https://drive.google.com/file/d/1zbwUxdBXXq_jvGDz_kXfHxTWyEIUehv6/view?usp=drive_link';

  // Configuración de EmailJS - Reemplaza con tus credenciales
  private readonly EMAILJS_SERVICE_ID = 'service_28da8jx';
  private readonly EMAILJS_TEMPLATE_ID = 'template_mp688xd';
  private readonly EMAILJS_PUBLIC_KEY = 'pPF12BnfEtNqRjtvE';

  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.showSuccess = false;
    this.showError = false;

    // Configurar EmailJS
    emailjs.init(this.EMAILJS_PUBLIC_KEY);

    // Parámetros del template
    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: 'juanmah1998@gmail.com' // Tu email donde recibirás los mensajes
    };

    // Enviar email
    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log('Email enviado exitosamente:', response);
      this.showSuccess = true;
      this.resetForm();
    })
    .catch((error) => {
      console.error('Error al enviar email:', error);
      this.showError = true;
      this.errorMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
    })
    .finally(() => {
      this.isLoading = false;
    });
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  dismissAlert() {
    this.showSuccess = false;
    this.showError = false;
  }

  cv() {
    window.open(this.cvUrl, '_blank');
  }
}
