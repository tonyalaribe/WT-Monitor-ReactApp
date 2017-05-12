/*
 *
 * UserArchive
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectUserArchive from './selectors';
import moment from 'moment';
import backend from 'utils/constant.js';

export class UserArchive extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
   super(props);
   let today = moment().subtract(1, 'days').format("YYYY-MM-DD");
   let todayRFC3339 = encodeURIComponent(moment().subtract(1, 'days').format());
   //this.state = {dateValue: today, url:'/api/archive?day='+todayRFC3339};
   this.state = {dateValue: today, url:'http://localhost:8080/static/y.mp4'};
   this.handleChange = this.handleChange.bind(this);
 }

  handleChange(event) {
    let date = event.target.value
    let dateRFC3339 = encodeURIComponent(moment(date).format())
    console.log(dateRFC3339)
    //let dateURL = `/api/archive?day=${dateRFC3339}`
    //let dateURL = "http://video.webmfiles.org/big-buck-bunny_trailer.webm"
    let dateURL = "http://localhost:8080/static/y.mp4"
    console.log(dateURL)
    this.setState({dateValue: date, url:dateURL});
  }

  render() {
    return (
      <div>
        <Helmet
          title="UserArchive"
          meta={[
            { name: 'description', content: 'Description of UserArchive' },
          ]}
        />

        <section className="pa4">
          <div>
            <h2>Choose a date</h2>
            <input type="date" className="ba pa2" value={this.state.dateValue}
          onChange={this.handleChange} />
          </div>
          <div className="w-100">
            <video  controls className="w-100" key={this.state.url}>
              <source src={backend()+this.state.url} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = selectUserArchive();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserArchive);
