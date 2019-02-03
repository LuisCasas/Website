import { shallow } from 'enzyme';
import React from 'react';
import MainPage from '../../components/MainPage';

test('Should render MainPage component', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper).toMatchSnapshot();
});