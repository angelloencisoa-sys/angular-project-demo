import { TestBed } from '@angular/core/testing';
import { TextPlayground } from './text-playground';

describe('TextPlayground', () => {
  it('updates the preview when the user types and changes the limit', async () => {
    const fixture = TestBed.createComponent(TextPlayground);
    await fixture.whenStable();
    const textarea = fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement;
    textarea.value = 'Una descripción útil para una tarjeta de noticias';
    textarea.dispatchEvent(new Event('input'));
    const range = fixture.nativeElement.querySelector('input[type=range]') as HTMLInputElement;
    range.value = '20';
    range.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.result').textContent).toBe('Una descripción...');
  });

  it('preserves short text and handles a long word without returning only ellipsis', () => {
    const component = new TextPlayground();
    component.text = 'Hola mundo';
    expect(component.result).toBe('Hola mundo');
    component.text = 'Supercalifragilisticoespialidoso';
    component.limit = 10;
    expect(component.result).toBe('Supercalif...');
    component.text = '';
    expect(component.result).toBe('');
  });

  it('restores the initial example and clears feedback', () => {
    const component = new TextPlayground();
    component.text = 'Otro texto';
    component.limit = 20;
    component.ellipsis = ' →';
    component.completeWords = false;
    component.copyMessage = '¡Resultado copiado!';
    component.reset();
    expect(component.text).toBe(component.example);
    expect(component.limit).toBe(60);
    expect(component.completeWords).toBe(true);
    expect(component.ellipsis).toBe('...');
    expect(component.copyMessage).toBe('');
  });
});
