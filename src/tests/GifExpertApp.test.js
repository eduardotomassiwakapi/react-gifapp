import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('<GifExpertApp />', () => {
    
    // BEFORE TEST
    // let wrapper = shallow(<GifExpertApp />);
    // beforeEach(() => {
    //     wrapper = shallow(<GifExpertApp />);
    // })

    test('should render properly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should render the correct amount of <GifGrid />', () => {
        const categories = ['Tomatoes', 'Lemons', '']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
        expect(wrapper.find('div').text()).toBe(categories.join(' - '))
    })
    
})
