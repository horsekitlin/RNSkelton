import React from 'react';
import propTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Typography } from '@material-ui/core';
import styles from './styles.css';
import withStyles from "@material-ui/core/styles/withStyles";

class DateRange extends React.Component {
  static propTypes = {
    defaultStartDate: propTypes.oneOfType([
      propTypes.oneOf([null]),
      propTypes.string
    ]),
    defaultEndDate: propTypes.oneOfType([
      propTypes.oneOf([null]),
      propTypes.string
    ]),
    onDateChange: propTypes.func,
  };

  static defaultProps = {
    startDate: null,
    endDate: null,
    onDateChange: (state) => state, 
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  componentDidMount() {
    const {defaultStartDate, defaultEndDate} = this.props;
    const startDate = defaultStartDate ? new Date(defaultStartDate): null;
    const endDate = defaultEndDate ? new Date(defaultEndDate): null;

    this.setState(state => ({...state, startDate, endDate}));
  }

  componentDidUpdate() {
    this.props.onDateChange(this.state);
  }

  handleChangeStart = (startDate) => {
    this.setState(state => ({...state, startDate}))
  }

  handleChangeEnd = (endDate) => this.setState(state => ({...state, endDate}))

  render() {
    const {startDate, endDate} = this.state;

    return (
      <div>
        <Typography component='span' color="inherit" inline>創建時間</Typography>
        <DatePicker
          className='date_picker_input_field'
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeStart}
        />
        <Typography component='span' color="inherit" inline>至</Typography>
        <DatePicker
          className='date_picker_input_field'
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeEnd}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DateRange);
