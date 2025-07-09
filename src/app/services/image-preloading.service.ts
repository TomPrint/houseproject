import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloadingService {

  preload(urls: string[]): void {
    urls.forEach(url => {
      const img = new Image();
      img.onload = () => {
        console.log(`Image preloaded: ${url}`);
      };
      img.onerror = () => {
        console.error(`Failed to preload image: ${url}`);
      };
      img.src = url;
    });
  }
}