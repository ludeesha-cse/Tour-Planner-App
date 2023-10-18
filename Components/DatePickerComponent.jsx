// import React , {useState} from "react";
// import DatePicker from 'react-native-modern-datepicker';

// export default function DatePickerComponent() {
//     const[date,setDate] = useState('');

//     return (
//         <DatePicker onSelectedChange={date => setDate(date)} />
//     );
// };
import React, { Component } from 'react'
import DatePicker from '@react-native-community/datetimepicker'

export default class DatePickerComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
        date: new Date(2023,8,31),
    }
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        value={this.state.date}
        //date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}

