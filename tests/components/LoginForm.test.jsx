import LoginForm from '../../app/components/LoginForm';
import React from 'react';
import {shallow, mount} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

describe('LoginForm component', () => {
    let props;

    beforeEach(() => {
        props = {
            handleLoaded: jest.fn(),
            logging: false,
            handleSubmit: jest.fn(),
            error: ''
        };
    });

    it('should be a form component', () => {
        const wrapper = shallow( <LoginForm {...props} /> );
        expect(wrapper.type()).to.equal('form');
    });

    it('should have three child and correct class names based on props', () => {
        const wrapper = shallow( <LoginForm {...props} /> );
        expect(wrapper.find('div')).to.have.length(3);
        expect(wrapper.childAt(0)).to.have.className('row');
        expect(wrapper.childAt(0)).to.have.className('gp-input');
        expect(wrapper.find('div.row.gp-input > input[type=\'text\']')).to.have.length(1);

        expect(wrapper.childAt(1)).to.have.className('row');
        expect(wrapper.childAt(1)).to.have.className('gp-input');
        expect(wrapper.find('div.row.gp-input > input[type=\'password\']')).to.have.length(1);

        expect(wrapper.childAt(2)).to.have.className('row');
        expect(wrapper.childAt(2)).to.have.className('text-center');
        expect(wrapper.find('div.row.text-center > button')).to.have.length(1);
        expect(wrapper.find('div.row.text-center > button')).prop('type').to.equal('submit');
        expect(wrapper.find('button')).to.have.className('btn');
        expect(wrapper.find('button')).to.have.className('btn-primary');
        expect(wrapper.find('button')).to.have.className('btn-lg');
        expect(wrapper.find('button')).to.have.className('gp-login-submit-btn');
    });

    it('should display loading button when is logging', () => {
        props.logging = true;
        const wrapper = shallow( <LoginForm {...props} /> );
        const submitBtn = wrapper.find('button[type=\'submit\']');
        expect(submitBtn).to.have.className('btn');
        expect(submitBtn).to.have.className('btn-primary');
        expect(submitBtn).to.have.className('btn-lg');
        expect(submitBtn).to.have.className('gp-login-submit-btn');
        expect(submitBtn).to.have.className('disabled');

        expect(wrapper.find('button[type=\'submit\']').children()).to.have.length(1);
        const iEl = wrapper.find('button[type=\'submit\'] > i');
        expect(iEl).to.have.className('fa');
        expect(iEl).to.have.className('fa-refresh');
        expect(iEl).to.have.className('fa-spin');
    });

    it('should display error when props contains it', () => {
        props.error = 'error';
        const wrapper = shallow( <LoginForm {...props} /> );
        const errorEl = wrapper.find('div.row.text-center > p');
        expect(errorEl).to.have.className('text-danger');
        expect(errorEl.text()).to.equal(props.error);
    });

    it('should call handleLoaded when is mounted', () => {
        mount( <LoginForm {...props} /> );
        expect(props.handleLoaded.mock.calls.length).to.equal(1);
    });

    it('should change state when text on inputs is changed', () => {
        const wrapper = mount( <LoginForm {...props} /> );

        let email = 'email';
        let password = 'p4ss';
        const text = wrapper.find('div.row.gp-input > input[type=\'text\']');
        text.simulate('change', {target: {value: email}});
        const pass = wrapper.find('div.row.gp-input > input[type=\'password\']');
        pass.simulate('change', {target: {value: password}});
        expect(wrapper).to.have.state('email', email);
        expect(wrapper).to.have.state('password', password);

        email = 'email@test.com';
        password = 'p4ssw0rd';
        text.simulate('change', {target: {value: email}});
        pass.simulate('change', {target: {value: password}});
        expect(wrapper).to.have.state('email', email);
        expect(wrapper).to.have.state('password', password);
    });

    it('should submit form when button submit is clicked', () => {
        const wrapper = mount( <LoginForm {...props} /> );
        expect(props.handleLoaded.mock.calls.length).to.equal(1);

        const email = 'email@test.com';
        const password = 'p4ssw0rd';
        wrapper.find('div.row.gp-input > input[type=\'text\']').simulate('change', {target: {value: email}});
        wrapper.find('div.row.gp-input > input[type=\'password\']').simulate('change', {target: {value: password}});

        wrapper.find('button').simulate('submit');
        expect(props.handleSubmit.mock.calls.length).to.equal(1);
        expect(props.handleSubmit.mock.calls[0][0]).deep.equal({email: email, password: password});
    });
});
