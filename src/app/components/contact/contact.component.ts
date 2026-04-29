import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_x2skqym';
const EMAILJS_TEMPLATE_ID = 'template_ddu9cvh';
const EMAILJS_PUBLIC_KEY  = 'fjz9Usi7atXNFeQUJ';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  status = signal<Status>('idle');

  emailMessage = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
  });

  socials = [
    { icon: 'bi-github',    label: 'GitHub',    sub: '@MickaelDutra',            url: 'https://github.com/MickaelDutra' },
    { icon: 'bi-linkedin',  label: 'LinkedIn',  sub: 'Mickael Dutra',            url: 'https://www.linkedin.com/in/mickael-dutra-690970258/' },
    { icon: 'bi-instagram', label: 'Instagram', sub: '@mickael_dutra05',         url: 'https://www.instagram.com/mickael_dutra05/' },
    { icon: 'bi-envelope',  label: 'E-mail',    sub: 'mickaeldutra.dev@gmail.com', url: 'mailto:mickaeldutra.dev@gmail.com' },
  ];

  async submit() {
    this.status.set('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  this.emailMessage.value.name,
          from_email: this.emailMessage.value.email,
          subject:    this.emailMessage.value.subject,
          message:    this.emailMessage.value.message,
          to_email:   'mickaeldutra.dev@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      this.status.set('sent');
      this.emailMessage.reset;
    } catch (err) {
      console.error('EmailJS error:', err);
      this.status.set('error');
    }
  }

  reset() { this.status.set('idle'); }
}
