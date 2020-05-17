import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import App from '../App';
import Main from '../containers/MainComponent';


// jest.mock('firebase/app');

test('any routing path should return to home path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <Main />
    </MemoryRouter>,
  );
  expect(wrapper.find(Home)).toHaveLength(1);
  expect(wrapper.find(Menu)).toHaveLength(0);
  expect(wrapper.find(Contact)).toHaveLength(0);
});
