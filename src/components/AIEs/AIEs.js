import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAIEs, deleteAIE } from '../../actions/constants/AIEs';


export class AIEs extends Component {
	static propTypes = {
		AIEs: PropTypes.array.isRequired,
		getAIEs: PropTypes.func.isRequired,
		deleteAIE: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getAIEs();
	}

	render() {
		return (
			<Fragment>
				<h2>Contact List</h2>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Message</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{ this.props.AIEs.map(AIE => (
							<tr key={AIE.id}>
								<td>{AIE.name}</td>
								<td>{AIE.email}</td>
								<td>{AIE.message}</td>
								<td>
									<button onClick={this.props.deleteAIE.bind(this, AIE.id)} className="btn btn-danger btn-sm">
									{" "}
									Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	AIEs: state.AIEs.AIEs
});

export default connect(
	mapStateToProps, 
	{ getAIEs, deleteAIE }
	)(AIEs);

