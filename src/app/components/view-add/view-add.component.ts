import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdPayload} from "../../../../model/adPayload";
import {AdvertiserPayload} from "../../../../model/advertiserPayload";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-view-ad',
  templateUrl: './view-add.component.html',
  styleUrls: ['./view-add.component.scss']
})
export class ViewAdComponent implements OnInit{
  ad: AdPayload = {}
  advertiser: AdvertiserPayload = {}
  constructor(private router: Router, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
    this.ad = JSON.parse(localStorage.getItem('ad') || '{}');
  }
  getImage(ad:AdPayload){
    let objectURL = 'data:image/png;base64,' + ad.resource?.data;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
