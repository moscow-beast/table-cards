import React from 'react';

export class Row extends React.Component {
	render(){
		return (
			<tr id={this.props.cardid}>
				<td>{this.props.parkingentertime}</td>
				<td>{this.props.lastpaymenttime}</td>
				<td>{this.props.sumoncard}</td>
				<td>{this.props.nulltime3}</td>
				<td>{this.props.tkvp}</td>
				<td>{this.props.clienttypidfc}</td>
				<td>{this.props.blocked}</td>
				<td>{this.props.lastplate}</td>
			</tr>
		);
	}
}