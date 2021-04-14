import { shallow } from 'enzyme'
import { GifGridItem } from "../../components/GifGridItem";

describe('<GifGridItem />', () => {

    const title = "title";
    const url = 'http//:someulr.com';
    
    // BEFORE TEST
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    })

    test('Should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render with h4 and img', () => {
        const h4 = wrapper.find('h4');
        expect(h4.text()).toBe(title);
        const img = wrapper.find('img').at(0);
        //console.log(img.props());
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    })

    test('div should have css class', () => {
        const div = wrapper.find('div').props();
        // console.log(div);
        expect(div.className).toBe('card animate__animated animate__fadeIn');
        expect(div.className.includes('animate__animated')).toBe(true);
        //expect(div).toHaveClass('card animate__animated animate__fadeIn') wont work cause it has className
    })

})
