/*
 *
 * UserTimeLog
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectUserTimeLog from './selectors';
import Chart from 'chart.js';
import { getTimelog } from './actions';
import moment from 'moment';

export class UserTimeLog extends React.Component { // eslint-disable-line react/prefer-stateless-function

  chartData={
  labels: ["9th", "10th", "11th", "12th","13th","15th","10th", "11th", "12th","13th","15th","10th", "11th", "12th","13th","15th","10th", "11th", "12th","13th","15th","10th", "11th", "12th","13th","15th","10th", "11th", "12th","13th","15th"],
  datasets: [
      {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [6,7,8,6,7,9,7,9,6,7,8,6,7,9,7,9,6,7,8,6,7,9,7,9,8,6,7,9,7,9],
          spanGaps: false,
      },{
          label: "My Second dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor:  "rgba(255,99,132,1)",
          borderColor: "rgba(255,99,132,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [18,17,18,18,17,15,12,17,18,17,18,18,17,15,12,18,17,18,18,17,15,12,17,18,17,18,18,17,15,12],
          spanGaps: false,
      }
  ]
}

componentWillMount(){
  this.props.dispatch(getTimelog(this.props.params.user))
}

componentWillReceiveProps(nextProps) {
  if (this.props.params.user!=nextProps.params.user){
    this.props.dispatch(getTimelog(nextProps.params.user))
  }

}
  componentDidMount () {
  let chartCanvas = this.refs.chart;

  let myChart = new Chart(chartCanvas, {
    type: 'line',
    //data: this.props.data,
    data: this.chartData,
    options: {
        scales: {
            xAxes: [{
                display: true,
            }]
        }
    }
  });

  this.setState({chart: myChart});
}

componentDidUpdate () {
    let chart = this.state.chart;
    //let data = this.props.data;
    let data = this.chartData;
    data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

    chart.data.labels = data.labels;
    chart.update();
}

  render() {
    let {timelog} = this.props;
    let labels = []
    let login = []
    let logout = []

    timelog.map((t)=>{
      console.log(t)
      console.log( moment(t.Day).date());
      labels.push(moment(t.Day).date());
      login.push(moment(t.Login).hour());
      logout.push(moment(t.Logout).hour())

    })

    this.chartData.labels = labels;
    this.chartData.datasets[0].data = login;
    this.chartData.datasets[0].label = "Login Time";
    this.chartData.datasets[1].data = logout;
    this.chartData.datasets[1].label = "Logout Time";

    //console.log(login)
    //console.log(logout)

    return (
      <div>
        <Helmet
          title="UserTimeLog"
          meta={[
            { name: 'description', content: 'Description of UserTimeLog' },
          ]}
        />


        <div className="pa5 ">
          <canvas ref={'chart'} className="w-100 " height="100"></canvas>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectUserTimeLog();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTimeLog);
