/*
 * <Alert
 *	className=string
 *	type=required string ["default", "warning", "error", "success"]
 *	text=required string
 * >
 */

var React = require("react");
var PropTypes = React.PropTypes;

var Alert = React.createClass({

	propTypes: {
		type: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		className: PropTypes.string,
		onClick: PropTypes.func
	},

	getDefaultProps: function() {
		return {
			type: "default",
			text: "Hello!"
		};
	},

	render: function() {

		if( typeof(this.props.onClick) === 'undefined' ){
			this.props.onClick = null;
		}

		return (
			<div className={["cb-alert", this.props.type].join(" ")} onClick={this.props.onClick} >
				<span className={["cb-alert-icon", this.props.type].join(" ")}></span>
				<p className="cb-alert-text">
					{this.props.text}
				</p>
			</div>
		);
	}
});

module.exports = Alert;
