import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Habilita detecção de mudanças com coalescimento de eventos
    provideRouter(routes)  // Fornece o roteamento da aplicação
  ]
};
