import ActionableMessages from '../../app/components/ActionableMessages';
import Message from '../../app/components/Message';
import style from '../../app/Message.scss';
import React from 'react';
import {shallow} from 'enzyme';

describe('ActionableMessages', () => {
    let mockClickHandler;
    let mockHandleMount;
    let mockMessages;

    beforeEach(() => {
        mockClickHandler = jest.fn.mock();
        mockHandleMount = jest.fn.mock();
        mockMessages = [
            {_id: 1, type: 1, text: 'text1', topic: 'topic1', read: false, date: '2017-03-15'},
            {_id: 2, type: 2, text: 'text2', topic: 'topic2', read: false, date: '2017-03-15'}
        ];
    });

    it('should have the \'Message\' components', () => {
        const wrapper = shallow(
            <ActionableMessages />
        );
        expect(wrapper.contains(<Message />)).toBe(true);
    });


});
