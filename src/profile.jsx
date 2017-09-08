import React from 'react';

export default class Profile extends React.Component {
	render() {
		// console.log(this.props.data);
		return (
			<section className="robot--profile">

				<div className="robot--profile__state">
				<ul>
				<li>
					<p><b>Номер карты:</b> {this.props.data.cardid}</p>
				</li>
				<li>
					<p><b>Время въезда на парковку:</b> {this.props.data.parkingentertime}</p>
				</li>
				<li>
					<p><b>Время оплаты:</b> {this.props.data.lastpaymenttime}</p>
				</li>
				<li>
					<p><b>Сумма на карте:</b> {this.props.data.sumoncard}</p>
				</li>
				<li>
					<p><b>Время обнуления абонемента (окончания):</b> {this.props.data.nulltime3}</p>
				</li>
				<li>
					<p><b>Текущее количество въездов за период:</b> {this.props.data.tkvp}</p>
				</li>
				<li>
					<p><b>Тип клиенты:</b> {this.props.data.clienttypidfc}</p>
				</li>
				<li>
					<p><b>Блокировка карты:</b> {this.props.data.blocked}</p>
				</li>
				<li>
					<p><b>Распознаный Гос.Номер:</b> {this.props.data.lastplate}</p>
				</li>
			</ul>
				</div>
			</section>
		);
	}
}
