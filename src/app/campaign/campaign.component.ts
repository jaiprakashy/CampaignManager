import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

export enum CampaignState {
  home,
  create_campaign,
  create_template
}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaign = CampaignState
  campaignState: CampaignState = CampaignState.home 
  @ViewChild(EmailEditorComponent, null)
  private emailEditor: EmailEditorComponent;
 
  exportHtml() {
    this.emailEditor.exportHtml((data) => console.log('exportHtml', data));
  }

  constructor() { }

  ngOnInit() {
  }

  public stateChanged(state: CampaignState): void {
    console.log(state);
    this.campaignState = state
  }

  compareState(state: CampaignState) {
    console.log(state);
    return this.campaignState == state
  }

}
