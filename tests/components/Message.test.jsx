import Message from '../../app/components/Message';
import DateUtils from '../../app/common/DateUtils';
import React from 'react';
import {shallow, mount} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

describe('Message component', () => {
    let props;
    let message;

    beforeEach(() => {
        message = {_id: 1, type: 1, text: 'text1', topic: 'topic1', read: false, date: '2017-03-15'};
        props = {
            handleClick: jest.fn(),
            topic: message.topic,
            text: message.text,
            type: message.type,
            isRead: message.read,
            date: message.date
        };
    });

    it('should have correct class names based on message type and read property', () => {
        let wrapper = shallow( <Message {...props} /> );
        expect(wrapper).to.have.className('message');
        expect(wrapper).to.have.className('unread');
        expect(wrapper.find('div')).to.have.length(4);
        expect(wrapper.childAt(0)).to.have.className('message__date');
        expect(wrapper.childAt(0)).to.have.className('subscribe');
        expect(wrapper.childAt(1)).to.have.className('message__text');
        expect(wrapper.childAt(2)).to.have.className('message__type');
        expect(wrapper.childAt(2)).to.have.className('subscribe');

        props.type = 2;
        props.isRead = true;
        wrapper = shallow( <Message {...props} /> );
        expect(wrapper).to.have.className('message');
        expect(wrapper).to.have.className('read');
        expect(wrapper.find('div')).to.have.length(4);
        expect(wrapper.childAt(0)).to.have.className('message__date');
        expect(wrapper.childAt(0)).to.have.className('unsubscribe');
        expect(wrapper.childAt(1)).to.have.className('message__text');
        expect(wrapper.childAt(2)).to.have.className('message__type');
        expect(wrapper.childAt(2)).to.have.className('unsubscribe');

        props.type = 4;
        props.isRead = true;
        wrapper = shallow( <Message {...props} /> );
        expect(wrapper).to.have.className('message');
        expect(wrapper).to.have.className('read');
        expect(wrapper.find('div')).to.have.length(4);
        expect(wrapper.childAt(0)).to.have.className('message__date');
        expect(wrapper.childAt(0)).to.have.className('info');
        expect(wrapper.childAt(1)).to.have.className('message__text');
        expect(wrapper.childAt(2)).to.have.className('message__type');
        expect(wrapper.childAt(2)).to.have.className('info');
    });

    it('should have correct values inside its elements based on props', () => {
        const date = new Date(props.date);
        const day = DateUtils.getDayString(date);
        const monthDay = DateUtils.getMonthDayString(date);

        let wrapper = shallow( <Message {...props} /> );
        expect(wrapper.find('div.message__date > span')).to.have.length(3);
        expect(wrapper.find('div.message__date').childAt(0).text()).to.equal(day);
        expect(wrapper.find('div.message__date').childAt(1).text()).to.equal(monthDay);
        expect(wrapper.find('div.message__date').childAt(2).text()).to.equal('' + date.getFullYear());

        expect(wrapper.find('div.message__text > span')).to.have.length(2);
        expect(wrapper.find('div.message__text').childAt(0).text()).to.equal(props.topic + ':');
        expect(wrapper.find('div.message__text').childAt(1).text()).to.equal(props.text);

        expect(wrapper.find('div.message__type').children()).to.have.length(0);
    });

    it('should call handleClick method when it is clicked or its child are clicked', () => {
        let wrapper = mount( <Message {...props} /> );
        wrapper.simulate('click');
        expect(props.handleClick.mock.calls.length).to.equal(1);

        wrapper.simulate('click');
        expect(props.handleClick.mock.calls.length).to.equal(2);

        wrapper.find('div.message__date').simulate('click');
        expect(props.handleClick.mock.calls.length).to.equal(3);

        wrapper.find('div.message__text').simulate('click');
        expect(props.handleClick.mock.calls.length).to.equal(4);

        wrapper.find('div.message__type').simulate('click');
        expect(props.handleClick.mock.calls.length).to.equal(5);
    });

});
