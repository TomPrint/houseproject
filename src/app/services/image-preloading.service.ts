import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImagePreloadingService {
  preload(urls: string[] | string): void {
    const list = Array.isArray(urls) ? urls : [urls];
    const seen = new Set<string>();
    for (const url of list) {
      if (!url || seen.has(url)) continue;
      seen.add(url);
      const img = new Image();
      img.src = url; // fire and forget; it’ll land in HTTP cache
    }
  }
}