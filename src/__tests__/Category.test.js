import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Category from '../components/Categories';

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    filters: jest.fn(),
  };

  const enzymeWrapper = shallow(<Category filterChange={props.filterChange} />);

  return {
    props,
    enzymeWrapper,
  };
}


describe('components', () => {
  describe('Category', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('select').hasClass('filterSelect')).toBe(true);
    });
  });
});
