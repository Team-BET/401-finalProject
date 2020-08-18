import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NameDisplay from '../components/songLoading/songLoading.js';
import SongLoading from '../components/songLoading/songLoading.js';

describe('does component work right', () => {
    it('has the right initial state values', () => {
        let component = shallow(<SongLoading />);
        expect(component.state('')).toBe('');
    ;
    });
