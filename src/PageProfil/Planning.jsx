import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Planning.css'
import '../../node_modules/moment/locale/fr.js';

moment.locale('fr');
const localizer = BigCalendar.momentLocalizer(moment)


class Planning extends Component {
 
  render() {
    const {messages} = this.props;
    return (
      <div className="Planning">
        <BigCalendar
          localizer={localizer}
          events={[
            {
              'title': 'Dejeuner chez X',
              'allDay': false,
              'start': new Date(2019, 3, 24, 10, 0),
              'end': new Date(2019, 3, 24, 14, 0),
            },{
              'title': 'Soirée chez Y',
              'allDay': false,
              'start': new Date(2019, 3, 25, 18, 0), 
              'end': new Date(2019, 3, 25, 23, 59), 
            },{
              'title': 'Soirée chez Y',
              'allDay': false,
              'start': new Date(2019, 3, 26, 0, 0), 
              'end': new Date(2019, 3, 26, 2, 0), 
            },{
              'title': 'Non Dispo',
              'allDay': false,
              'start': new Date(2019, 3, 26, 2, 0), 
              'end': new Date(2019, 3, 26, 18, 0), 
            },
        
          ]}
          startAccessor="start"
          endAccessor="end"
          culture='fr'
          messages= {messages}
        />
      </div>
    );
  }
}
export default Planning;