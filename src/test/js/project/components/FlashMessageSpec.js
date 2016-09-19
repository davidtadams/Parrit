var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

var RenderComponent = require('support/RenderComponent.js');

var FlashMessage = require('project/components/FlashMessage.js');

var flashMessage, flashMessageElement;

beforeEach(function () {
    var message = {type: 'success', text: 'I am a message'};
    flashMessage = RenderComponent(FlashMessage, <FlashMessage message={message}/>);
    // flashMessageElement = ReactDOM.findDOMNode(flashMessage)
});

it('has alert class with alert-success', function () {
    var alert = ReactTestUtils.findRenderedDOMComponentWithClass(flashMessage, 'alert');
    var alertSuccess = ReactTestUtils.findRenderedDOMComponentWithClass(flashMessage, 'alert-success');
    expect(alert).toBeTruthy();
    expect(alertSuccess).toBeTruthy();
    // expect(flashMessageElement.toString()).toBe('I am a message');
});

it('has alert class with alert-danger', function () {
    var message = {type: 'error', text: 'I am a message'};
    flashMessage = RenderComponent(FlashMessage, <FlashMessage message={message}/>);
    var alert = ReactTestUtils.findRenderedDOMComponentWithClass(flashMessage, 'alert');
    var alertDanger = ReactTestUtils.findRenderedDOMComponentWithClass(flashMessage, 'alert-danger');
    expect(alert).toBeTruthy();
    expect(alertDanger).toBeTruthy();
});