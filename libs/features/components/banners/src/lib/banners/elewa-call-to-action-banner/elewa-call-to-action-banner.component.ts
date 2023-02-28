import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-call-to-action-banner',
  templateUrl: './elewa-call-to-action-banner.component.html',
  styleUrls: ['./elewa-call-to-action-banner.component.scss'],
})
export class ElewaCallToActionBannerComponent {
  @Input() paragraphText = `Become part of our mission and start investing`
  
}
