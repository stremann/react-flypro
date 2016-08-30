import React, { Component } from 'react';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

import { wrap } from '../../src/';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('Wrap', () => {
    let mockStore;
    let mockStates;
    let mockHandlers;

    let MockComponent;
    let ExtendedComponent;
    let instanceOfExtendedComponent;
    let instanceOfExtendedComponentUnsubscribeStub = sinon.stub();

    beforeEach(() => {
        mockStore = {
            getState: () => {},
            send: () => {},
            subscribe: sinon.stub().returns(instanceOfExtendedComponentUnsubscribeStub)
        };
        mockStates = () => ({
            mockState: 'mockStateValue'
        });
        mockHandlers = () => ({
            mockHandler: 'mockHandlerValue'
        });
    });

    beforeEach(() => {
        MockComponent = () => (
            <div className="mock-component"></div>
        );
        ExtendedComponent = wrap(mockStates, mockHandlers)(<MockComponent store={mockStore} />);

        instanceOfExtendedComponent = new ExtendedComponent();

        // pass the store to each component explicitly
        instanceOfExtendedComponent.props = mount(<MockComponent store={mockStore} />).props();
    });


    it('should extend base component with store', () => {
        const WrappedComponent = instanceOfExtendedComponent.render();
        expect(WrappedComponent.props.store).to.deep.equal(mockStore);
    });

    it('should extend base component with states', () => {
        const WrappedComponent = instanceOfExtendedComponent.render();
        expect(WrappedComponent.props.mockState).to.equal('mockStateValue');
    });

    it('should extend base component with handlers', () => {
        const WrappedComponent = instanceOfExtendedComponent.render();
        expect(WrappedComponent.props.mockHandler).to.equal('mockHandlerValue');
    });

    it('should subscribe for store changes on component did mount', () => {
        instanceOfExtendedComponent.componentDidMount();
        expect(mockStore.subscribe).calledWith(sinon.match.func);
    });

    it('should unsubscribe for store changes on component will unmount', () => {
        instanceOfExtendedComponent.componentDidMount(); // to create unsubscribe handler
        instanceOfExtendedComponent.componentWillUnmount();
        expect(instanceOfExtendedComponentUnsubscribeStub).calledWith();
    });
});