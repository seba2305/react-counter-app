import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe mostrar el mensaje "Hola soy Goku"', () => {

    //     const saludo = 'Hola soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);

    //     expect(getByText(saludo)).toBeInTheDocument();

    // })

    //Pruebas con enzyme
    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola soy Goku';
        const subtitulo = 'El subtitulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);

    })


})
