// image-preloading.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImagePreloadingService {
  preload(urls: string[] | string): Promise<void[]> {
    const list = Array.isArray(urls) ? urls : [urls];
    const tasks = list
      .filter(Boolean)
      .map((src) => new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // don't block on errors
        img.src = src;
      }));
    return Promise.all(tasks);
  }

  /** Preload + decode = fully ready to paint */
  preloadAndDecode(urls: string[] | string): Promise<void[]> {
    const list = Array.isArray(urls) ? urls : [urls];
    const tasks = list
      .filter(Boolean)
      .map((src) => {
        const img = new Image();
        img.src = src;
        // decode() resolves after the image is fully decoded (no layout jank)
        const decoded = ('decode' in img) ? (img as any).decode().catch(() => {}) : Promise.resolve();
        return decoded.then(() => undefined);
      });
    return Promise.all(tasks);
  }
}