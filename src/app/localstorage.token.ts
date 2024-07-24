import { InjectionToken } from '@angular/core';

export const LocalStorageToken = new InjectionToken<Storage | null>('local storage', {
  providedIn: 'root',
  factory: () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return typeof window !== 'undefined' ? window.localStorage : null;
    }
    return null;
  }
});
