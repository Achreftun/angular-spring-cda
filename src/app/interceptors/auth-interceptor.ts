import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url == `${environment.BACKEND_URL}/authenticate`) {
    return next(req);
  }
  const accessToken = localStorage.getItem('accessToken') 
  const cloned = req.clone({
    setHeaders: { Authorization: `Bearer ${accessToken}` }
  })
  return next(cloned);

};
