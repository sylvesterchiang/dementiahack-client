import React from 'react';
import DocumentTitle from 'react-document-title';
import { Jumbotron } from 'react-bootstrap';

const HomePage = () => {
	return (
		<DocumentTitle title="Home">
			<div>
				<Jumbotron style={{'paddingLeft': '30px', 'paddingRight':'30px'}}>
					<h1>Toronto Cognitive Assessment</h1>
					<div style={{marginTop: '3em'}}className="row">
						<div className="col-md-4">
							<img className="img-responsive jumbotron-image" src="https://coronadotimes.com/wp-content/uploads/2016/06/ascending-graph.png"  />
							<p>Metadata on cognitive assessments</p>
						</div>
						<div className="col-md-4">
							<img className="img-responsive jumbotron-image"  src="https://www.deepcoredata.com/wp-content/uploads/2016/06/small_1420.png"  />
							<p>Big data for machine learning algorithm</p>
						</div>
						<div className="col-md-4">
							<img className="img-responsive jumbotron-image" src="http://bav0.com/wp-content/uploads/sites/11/2014/06/pie-chart.png" />
							<p>Streamlined data collection for improved clinical outcomes</p>
						</div>
					</div>
				</Jumbotron>
			</div>
		</DocumentTitle>
	);
}

module.exports = HomePage;