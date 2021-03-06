import {Pipe, PipeTransform} from '@angular/core';
import {SafeHtml, DomSanitizationService} from '@angular/platform-browser';

 
@Pipe({
    name: 'sanitizeHtml'
})

export class SanitizeHtml implements PipeTransform  {

   constructor(private _sanitizer: DomSanitizationService){}  

   transform(v: string) : SafeHtml {
      return this._sanitizer.bypassSecurityTrustHtml(v); 
   } 
} 