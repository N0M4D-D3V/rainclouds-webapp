import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mail-modal',
  templateUrl: './mail-modal.component.html',
  styleUrls: ['./mail-modal.component.scss'],
})
export class MailModalComponent implements OnInit {
  public contact: Contact = new Contact();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  public processForm() {
    this.contactService.sendEmail(this.contact).subscribe((response) => {
      if (response.ok) {
        this.throwSwalSuccess();
      } else {
        this.throwSwalFailure();
      }
    });
  }

  private throwSwalSuccess(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      iconColor: 'orangered',
      text: 'Message sent. I answer you as soon as possible.',
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__rotateInUpRight',
      },
      hideClass: {
        popup: 'animate__animated animate__hinge',
      },
    });
  }

  private throwSwalFailure(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      text: 'An error ocurred. Please try again.',
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__rotateInUpRight',
      },
      hideClass: {
        popup: 'animate__animated animate__hinge',
      },
    });
  }
}
