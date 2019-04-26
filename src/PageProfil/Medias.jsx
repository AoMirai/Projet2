import React, {Component} from 'react'; 
import Planning from './Planning.jsx'
import Playlist from './Playlist.jsx'
import './Medias.css';


// Changes les boutons du planning en français
let messages = {
  allDay: 'Journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: 'Aujourd\'hui',
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Evenement',
  noEventsInRange: 'Il n\'y a pas d\'evenements pour cette période',
  showMore: function showMore(total) {
    return "+" + total + " plus";
  }
} 


class Medias extends Component {
  render(){
    return(
    <div className="Medias">
      <Playlist />
    <Planning messages={messages}/>
    </div>
    )
  }
}

export default Medias;