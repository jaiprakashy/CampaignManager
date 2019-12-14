import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailTemplate } from './template.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  apiURL: string = 'http://dummy.restapiexample.com/api/v1/create';

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('$apiURL/sendMail')
  }

  postTemplate(template: EmailTemplate) {
    return this.httpClient.post(this.apiURL, template);
  }

  getUsers() {
    return this.httpClient.get(this.apiURL)
  }
}
