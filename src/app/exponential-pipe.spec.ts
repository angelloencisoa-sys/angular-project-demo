import { ExponentialPipe } from './exponential-pipe';
describe('ExponentialPipe', () => {
 let pipe: ExponentialPipe;
 beforeEach(() => {
 pipe = new ExponentialPipe();
 });
 it('debe elevar un número a la potencia 1 por defecto', () => {
 expect(pipe.transform(2)).toBe(2);
 });
 it('debe elevar un número a la potencia indicada', () => {
 expect(pipe.transform(2, 3)).toBe(8);
 });
 it('debe devolver 1 cuando el exponente es 0', () => {
 expect(pipe.transform(5, 0)).toBe(1);
 });
 it('debe manejar exponentes negativos', () => {
 expect(pipe.transform(2, -1)).toBe(0.5);
 });
});

