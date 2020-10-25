import { TranslateService } from '@ngx-translate/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddToCardService } from '../../services/add-to-card.service';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  prodNum: number;
  LikeNum: number;
  object: any;
  currentLanguage: string;
  destroy: any;
  constructor(
    private Cartsercive: AddToCardService,
    public translate: TranslateService,
    @Inject(DOCUMENT) public document: Document
  ) {
    this.translate.addLangs(['en', 'ar']);
    this.currentLanguage = localStorage.getItem('currentLanguage') || 'en';
    this.translate.use(this.currentLanguage);
    this.switchLang(this.currentLanguage);
  }

  ngOnInit(): void {
    this.GetProdNumber();
    this.GetLikesnumber();
  }
  ngOnDestroy(): void {
    this.destroy.unsubscribe();
  }
  GetProdNumber() {
    this.destroy = this.Cartsercive.CartListSubjet.subscribe((res) => {
      this.prodNum = res.length;
    });
    this.object = JSON.parse(localStorage.getItem('res'));
    if (this.object != null) this.Cartsercive.CartListSubjet.next(this.object);
  }

  GetLikesnumber() {
    this.destroy = this.Cartsercive.likeListSubject.subscribe((res) => {
      this.LikeNum = res.length;
    });
    this.object = JSON.parse(localStorage.getItem('likes'));
    if (this.object != null) this.Cartsercive.likeListSubject.next(this.object);
  }
  // Change Languages
  switchLang(lang: string) {
    this.translate.use(lang);
    let htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translate.use(lang);
    localStorage.setItem('currentLanguage', lang);
    this.changeCssFile(lang);
  }
  // Change Css Files based on dir
  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;

    let bundleName = lang === 'ar' ? 'arabicStyle.css' : 'englishStyle.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  asideMenua() {
    let sideMenuButton = document.getElementById('side-menu'),
      asideMenu = document.getElementById('asideMenu'),
      currentLanguage = this.translate.currentLang;
    if (sideMenuButton) {
      if (currentLanguage === 'en') asideMenu.classList.toggle('sideWave');
      else asideMenu.classList.toggle('sideWaveAr');
    }
  }
  closeButtom() {
    let closebutton = document.getElementById('close-button'),
      asideMenu = document.getElementById('asideMenu'),
      currentLanguage = this.translate.currentLang;
    if (closebutton) {
      if (currentLanguage === 'en') asideMenu.classList.toggle('sideWave');
      else asideMenu.classList.toggle('sideWaveAr');
    }
  }
}
