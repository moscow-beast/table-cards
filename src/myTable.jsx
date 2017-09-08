import React from 'react';
import {Row} from './row';

export default class Table extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<table className="all--users">
				<tbody>
					{
						this.props.data.map((item, i) => {
							return <Row cardid={item.int}
							parkingentertime={item.DataTime} 
							lastpaymenttime={item.DataTime} 
							sumoncard={item.int}
							nulltime3={item.DataTime}
							tkvp={item.smallint}
							clienttypidfc={item.tinyint}
							blocked={item.tinyint}
							lastplate={item.varchar} />
						})
					}
				</tbody>
			</table>
		);
	}

}
