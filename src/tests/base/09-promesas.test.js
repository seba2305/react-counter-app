import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe async', () => {

        const id = 1;
        return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);

    });

    test('debe obtener un error si el heroe por id no existe', () => {
       
        const id = 10;
        return expect(getHeroeByIdAsync(id)).rejects.toBe('No se pudo encontrar el héroe');

    });
    
})
