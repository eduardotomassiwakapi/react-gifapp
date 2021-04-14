import { shallow } from 'enzyme'
import { AddCategory } from "../../components/AddCategory";

describe('<AddCategory />', () => {
    
    const setCategories = jest.fn();

    // BEFORE TEST
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change input', () => {
        
        wrapper.find('input').simulate('change',  { target: { name: 'value', value: 'a' } });
        expect(wrapper.find('input').prop('value')).toBe('a');
        
        const inputValue = 'Hello world';
        wrapper.find('input').simulate('change',  { target: { value: inputValue } });
        expect(wrapper.find('input').prop('value')).toBe(inputValue);
    });


    test('should NOT call setCategories', () => {

        wrapper.find('input').simulate('change',  { target: { value: 'aa' } });
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).not.toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(0);
    })
    
    test('should call setCategories and clear input', () => {
     
        const inputValue = 'Hello world';
        wrapper.find('input').simulate('change',  { target: { value: inputValue } });
        //expect(wrapper.find('input').prop('value')).toBe(inputValue);

        wrapper.find('form').simulate('submit', { preventDefault(){} })
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toEqual('');
    })
    
})
