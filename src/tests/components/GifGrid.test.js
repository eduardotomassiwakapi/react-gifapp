import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")

describe('<GifGrid />', () => {

    // MOCKS
    // useFetchGifs = jest.fn().mockResolvedValue({
    //     data: [
    //       {
    //         id: "Id",
    //         title: 'Title',
    //         url: 'URL'
    //       }
    //     ]
    //   });
    // useFetchGifs.mockReturnValue({
    //     data: [
    //         {
    //             id: "item.id",
    //             title: "item.title",
    //             url: "item.images?.fixed_height.url"
    //         }
    //     ],
    //     loading: true
    // });

    //BEFORE TESTS
    const category = 'Test'
    const limit = 20;
    // let wrapper = shallow(<GifGrid category={category} limit={limit} />);
    // beforeEach(() => {
    //     jest.clearAllMocks();
    //     wrapper = shallow(<GifGrid category={category} limit={limit} />);
    // })


    test('Should render properly with Loading...', () => {

        useFetchGifs.mockReturnValue({
            data: [ ],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} limit={limit} />);
        
        expect(wrapper.find('h3').text()).toBe(category);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show items when images get loaded from useFetchGifs', () => {
        const gifs = [{
            id: "item.id",
            title: "item.title",
            url: "item.images?.fixed_height.url"
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false //not loading any more
        });
        const wrapper = shallow(<GifGrid category={category} limit={limit} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

        //expect(wrapper).toMatchSnapshot();
    });
    
})
