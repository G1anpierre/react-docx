import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import ClassNames from 'classnames';
import DayPicker, { DateUtils } from 'react-day-picker';

// import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
//import 'moment/locale/it';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import entrada from './entrada.css';
import styles from '../node_modules/react-day-picker';

function OverlayComponent({classNames, children, ...props}) {

    return (
        <div 
        {...props}
        className={classNames.overlayWrapper}
        style={{ marginLeft: 300, 
                 width: 400
        }}
        >
          <div className={classNames.overlay}
            style={{ 
                    width: 500,
                    fontSize: 62
            }}
            
          >
            {children}
            </div>
        </div>
        
    )
}

const modifiers = {
    mondays: { daysOfWeek: [1]},
    thursdays: { daysOfWeek: [4]},
    birthday: new Date(2020, 2, 17)
}

const modifiersStyles = {
    mondays: {
        color: 'white',
        backgroundColor: 'red',
        fontSize: '34px',
        padding: '16px'
    },

    thursdays: {
        color: '#ffc107',
        backgroundColor: '#fffdee',
        padding: '32px'
    }
}


//Class that controls the State for multiple clicks variables

class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDays: []
        };
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
        this.setState({ selectedDays })
    }

    render () {
        return (
        <React.Fragment>
            <DayPicker 
            modifiers={modifiers} 
            modifiersStyles={entrada}  
            onDayChange={day => console.log(day)}  
            showOverlay={true}
            month={new Date(2019, 11)} 
            fromMonth={new Date(2019, 10)}
            toMonth={new Date(2019, 12)}
            showOutsideDays 
            fixedWeeks 

            selectedDays={this.state.selectedDays}
            onDayClick={this.handleDayClick}
            />
        </React.Fragment>
        )   
    }
}


// I know this work but I need to handle State
function Entrada() {

    return (
        <React.Fragment>
            <DayPicker 
            modifiers={modifiers} 
            modifiersStyles={entrada}  
            onDayChange={day => console.log(day)}  
            showOverlay={true}
            month={new Date(2019, 11)} 
            fromMonth={new Date(2019, 10)}
            toMonth={new Date(2019, 12)}
            showOutsideDays 
            fixedWeeks 


            />
        </React.Fragment>
    )
    
}


export default General;