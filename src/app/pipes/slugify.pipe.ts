import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify',
  standalone: true
})
export class SlugifyPipe implements PipeTransform {

  transform(input: string): string {
    if (!input) return '';
    return input.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

}
