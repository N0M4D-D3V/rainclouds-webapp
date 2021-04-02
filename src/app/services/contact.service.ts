import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact, ContactResponse } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private endpoint: string = 'https://formspree.io/f/xleovgjn';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  sendEmail(contact: Contact): Observable<any> {
    return this.http.post(this.endpoint, {
      name: contact.name,
      replyto: contact.email,
      messege: contact.message,
    }).pipe(
      map((response: any) => response as ContactResponse)
    );
  }
}