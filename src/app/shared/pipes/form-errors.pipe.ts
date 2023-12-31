import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | null | undefined, ...args: unknown[]): unknown {

    if (!value) return '';

    const errorMessages: string[] = [];

    if (value) {
      if ('required' in value) {
        errorMessages.push('Campo Requerido');
      }
      
      if ('email' in value) {
        errorMessages.push('Email Invalido');
      }
    }
    return errorMessages.join(', ');
  }
}
