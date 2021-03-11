import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Seba', () => {
        
        const nombre = 'Seba';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre);
    })
    test('getSaludo debe retornar Hola Anto si no hay argumentos', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Anto');
    })
    
})
