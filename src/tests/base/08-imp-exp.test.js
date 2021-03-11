import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('debe retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })
    
    test('debe retornar undefined heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })
    
    test('debe retornar un arreglo con los heroes DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const ownerData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(ownerData);
    })

    test('debe retornar un arreglo con los heroes Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(2);
    })
    
})
