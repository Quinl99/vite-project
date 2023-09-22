import React from "react";
import Event from './Event'



const Calendar = () => {
    return (
        <div className="Calender">
            
                <table>
                    <thead>
                        <tr>
                        <th> </th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        </tr>
                    </thead> 

                    <tbody>
                    <tr>
                        <td className="time">8 AM</td>
                        <Event event='Breaksfast 🍳' color ='green' location='Royal Palm Hotel'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Breaksfast 🥞' color ='green' location='Royal Palm Hotel'/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">9 AM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Breaksfast 🍳' color ='red' location='Royal Palm Hotel'/>
                        <td></td>
                        <Event event='Breaksfast 🥞' color ='blue'location='Medas Lounge' />
                    </tr>

                    <tr>
                        <td className="time">10 AM</td>
                        <td></td>
                        <Event event='Breaksfast 🧇' color ='blue' location='Royal Palm Hotel'/>
                        <td></td>
                        <td></td>                        
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">11 AM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Miami Zoo 🦧' color ='red' location='152th st, Miami, Fl'/>
                    </tr>

                    <tr>
                        <td className="time">12 PM</td>
                        <Event event='Lunch 🍔' color ='green' location='Trick Daddy Eatery '/>
                        <td></td>
                        <Event event='Day Party 🕺🏽' color ='blue' location='134 Collins Dr'/>     
                        <td></td>
                        <Event event='Scuba Diving 🤿' color ='green' location='South Beach'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">1 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Art Museum 🖼️' color ='red' location='The Bass'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">2 PM</td>
                        <td></td>
                        <Event event='Swimming 🫘' color ='blue' location='Royal Palm Hotel'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Beach 🏖️' color ='green' location='South Beach'/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">3 PM</td>
                        <Event event='Boat ride 🛥️' color ='red'location='South Beach'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Jet Skiing 🌊' color ='red' location='South Beach'/>
                    </tr>

                    <tr>
                        <td className="time">4 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Dinner 🍔' color ='blue' location='Brickell City Pizza'/>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">5 PM</td>
                        <td></td>
                        <td></td>
                        <Event event='Dinner 🍝' color ='green' location='Greenhouse grill'/> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Event 🎶' color ='blue' location='7020 NE 71st Ave'/> 
                        </tr>
                    </tbody>

                </table>
            
        </div>
        )
}

export default Calendar;
