import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare global {
  interface Window {
    dataLayer: any[];
    fbq?: (...args: any[]) => void;
  }
}

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent implements OnInit {
  showBanner = false;
  analyticsConsent = false;
  marketingConsent = false;

  ngOnInit(): void {
    const saved = localStorage.getItem('cookie-preferences');
    if (!saved) {
      this.showBanner = true;
    } else {
      const prefs = JSON.parse(saved);
      if (prefs.analytics) this.loadGoogleAnalytics();
      if (prefs.marketing) this.loadMarketingScripts();
    }
  }

  saveConsent(): void {
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: this.analyticsConsent,
      marketing: this.marketingConsent,
    }));

    this.showBanner = false;

    if (this.analyticsConsent) this.loadGoogleAnalytics();
    if (this.marketingConsent) this.loadMarketingScripts();
  }

  loadGoogleAnalytics(): void {
    if (document.getElementById('ga-script')) return; // prevent double loading

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'; // ← REPLACE with your real GA ID
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    (window as any).gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    (window as any).gtag('js', new Date());
    (window as any).gtag('config', 'G-XXXXXXX'); // ← REPLACE with your real GA ID
  }

  loadMarketingScripts(): void {
    // Example: Facebook Pixel (Meta)
    if (window.fbq) return; // prevent double loading

    const fbScript = document.createElement('script');
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    fbScript.type = 'text/javascript';
    document.head.appendChild(fbScript);

    console.log('✅ Marketing scripts loaded: Facebook Pixel');
  }
}
