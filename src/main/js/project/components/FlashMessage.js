var React = require('react');

var FlashMessage = React.createClass({
    propTypes: {
        message: React.PropTypes.object.isRequired,
    },

    render: function () {
        const {type, text} = this.props.message;
        var alert = 'alert';
        if(type === 'success') {
            alert+=' alert-success'
        }
        if(type === 'error') {
            alert+=' alert-danger'
        }

        return (
            <div className={alert}>
                {text}
            </div>
        )
    }
});

module.exports = FlashMessage;