import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { PhoneCard } from '../../../components/Phones/PhoneCard';

describe('Testing <PhoneCard /> component', () => {

    test('should show <PhoneCard /> as expected', () => {
        
        const wrapper = shallow(<PhoneCard 
                id={0}
                imageFileName='IPhone_7.png'
                key={0}
                name='iPhone 7'
                price={769}
        />);

        expect( wrapper ).toMatchSnapshot();

    });   
    
})