import 'jest';
import React from 'react';
import Index from '..';
import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-enzyme';

describe(`Page: Index`, () => {
  it('Render correctly', function() {
    const wrapper: ShallowWrapper = shallow(<Index />);
    expect(wrapper.find(`[data-test="container"]`)).toExist();
    // expect(wrapper.find(`[data-test="container"]`).prop<string>('title')).toBe(`manu`);
  });
});
