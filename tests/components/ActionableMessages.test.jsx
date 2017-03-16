import ActionableMessages from '../../app/components/ActionableMessages';
import Message from '../../app/components/Message';
import style from '../../app/Message.scss';
import React from 'react';
import {shallow, mount} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

describe('ActionableMessages component', () => {
    let props;
    let messages;

    beforeEach(() => {
        messages = [
            {_id: 1, type: 1, text: 'text1', topic: 'topic1', read: false, date: '2017-03-15'},
            {_id: 2, type: 2, text: 'text2', topic: 'topic2', read: false, date: '2017-03-15'}
        ];
        props = {
            markAsRead: jest.fn(),
            messages,
            handleMount: jest.fn()
        };
    });

    it('should be mounted', () => {
        const wrapper = mount( <ActionableMessages {...props} /> );
        expect(wrapper).to.have.style('padding-top', '40px');
        expect(props.handleMount.mock.calls.length).to.equal(1);
    });

    it('should be placed inside div wrapper', () => {
        const wrapper = shallow( <ActionableMessages {...props} /> );
        expect(wrapper.type()).to.equal('div');
        expect(wrapper).to.have.style('padding-top', '40px');
    });

    it('should have the \'Message\' components', () => {
        const wrapper = shallow( <ActionableMessages {...props} /> );
        expect(wrapper.find(Message)).to.have.length(2);
    });

    it('should contain p with message: \'No messages found...\' when messages props is empty array', () => {
        props.messages = [];
        const wrapper = shallow( <ActionableMessages {...props} /> );
        expect(wrapper.find(Message)).to.have.length(0);
        expect(wrapper.find('p')).to.have.length(1);
        expect(wrapper.find('p').text()).to.equal('No messages found...');
    });

});
