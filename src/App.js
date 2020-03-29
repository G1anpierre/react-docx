import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDays: [],
    }
  }

  handleDayClick = (day, { selected }) => {
    const { selectedDays } = this.state;
    if(selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );

      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }

    this.setState({ selectedDays });
  }

  render() {

    return (
      <React.Fragment>
        <DayPicker 
        month={new Date(2019, 11)} 
        fromMonth={new Date(2019, 10)}
        toMonth={new Date(2019, 12)}
        showOutsideDays 
        fixedWeeks 

        initialMonth={new Date(2018, 2)}
        
        selectedDays={this.state.selectedDays}
        onDayClick={this.handleDayClick}

        />

        

      </React.Fragment>
    );
  }
}

export default App;
