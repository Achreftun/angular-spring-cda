import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { createReducer, provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './stores/counter/counter.reducer';
import { cartReducer } from './stores/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()), // routes
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])), // pour pouvoir inject HttpClient
    provideStore(),
    provideState('counter', counterReducer),
    provideState('cart', cartReducer),
  ]
};
