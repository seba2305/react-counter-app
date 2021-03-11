import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //Comparar objetos con las mismas propiedades y valores
        expect(user).toStrictEqual(userTest);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Seba';

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })

})
