import { mount } from '@vue/test-utils'
import {menuOptionsData} from '@/data/MenuOptions';
import { router } from '@/router/Router';
import Navbar from '@/components/Navbar/Navbar.vue';

const wrapper = mount(Navbar,{
    props:{
        menuOptions: menuOptionsData
    },
    global:{
        plugins: [router]
    }
})

describe('Test navbar component', () => { 

    test('should render component without problems', () => { 
        const navbar = wrapper.find('[data-testid="navbar"]');
        expect(navbar.exists()).toBe(true);
     })

     test('should render component with menu options', () => { 
        menuOptionsData.forEach(menu => {
            const option = wrapper.find(`[data-testid="menu-option-${menu.id}"]`);
            expect(option.text()).toBe(menu.text);
            expect(option.attributes('href')).toBe(menu.to);
        });
     })

     test('should render component with menu options is selected', () => { 
        const selectedMenu = menuOptionsData.find(menu => menu.isSelected);
        const option = wrapper.find(`[data-testid="menu-option-${selectedMenu?.id}"]`);
        expect(option.classes('bg-gray-900')).toBe(true);
     })

 })