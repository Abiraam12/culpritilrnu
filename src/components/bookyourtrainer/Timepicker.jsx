import React, { Fragment, useState } from "react";
import { TimePicker } from "@material-ui/pickers";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function Timepicker() {
  const [selectedDate, handleDateChange] = useState("2018-01-01T00:00:00.000Z");

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          variant="inline"
          // label="Inline mode"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default Timepicker;
