import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {

    //lo inicializo para tener el intellisense en VS
    let wrapper = shallow(<CounterApp />);;

    //inicializar antes de cada una de los test
    beforeEach(() =>{
        wrapper = shallow(<CounterApp />);
    });

    //Pruebas con enzyme
    test('debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100} /> );
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');

    });

    test('debe incrementar contador con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe decrementar contador con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe resetear contador con btnReset', () => {

        const wrapper = shallow(<CounterApp value={105} /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });
    

})
