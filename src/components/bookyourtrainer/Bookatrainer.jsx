import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, Rate, Input, TextArea, TimePicker } from "antd";

import "./Bookatrainer.css";
import "date-fns";
import { DatePicker } from "antd";
import moment from "moment";

const initialState = {
  username: "",
  date: "",
  price: "",
  passcode: "",
  address: "",
  phonenumber: "",
  textarea: "",
  usernameError: "",
  passcodeError: " ",
  priceError: "",
  addressError: "",
  phonenumberError: "",
  textareaError: ""
};

class Bookatrainer extends React.Component {
  state = {
    visible: true,
    selectDate: "",
    initialState: ""
  };

  componentDidMount() {
    this.setState({
      selectDate: Date.now()
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleDateChange = date => {
    alert(JSON.stringify(date));
    this.setState({ selectedDate: date });
  };

  onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  validate = () => {
    let usernameError = "";
    let passcodeError = "";
    let dateError = "";
    let priceError = "";
    let addressError = "";
    let phonenumberError = "";
    let textareaError = "";

    if (!this.state.username) {
      usernameError = " Please enter username";
    }

    if (!this.state.passcode) {
      passcodeError = " Please enter passcode";
    }
    if (!this.state.date) {
      dateError = "Please enter date";
    }
    if (!this.state.price) {
      priceError = "Please enter price";
    }
    if (!this.state.address) {
      addressError = "Please enter address";
    }
    if (!this.state.phonenumber) {
      phonenumberError = "Please enter phonenumber";
    }
    if (!this.state.textarea) {
      textareaError = "Please enter text";
    }
    if (
      usernameError ||
      passcodeError ||
      dateError ||
      priceError ||
      addressError ||
      phonenumberError ||
      textareaError
    ) {
      this.setState({
        usernameError,
        passcodeError,
        dateError,
        priceError,
        addressError,
        phonenumberError,
        textareaError
      });
      return false;
    }
    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { TextArea } = Input;
    const {
      username,
      date,
      price,
      passcode,
      address,
      phonenumber,
      textarea,
      usernameError,
      passcodeError,
      dateError,
      priceError,
      addressError,
      phonenumberError,
      textareaError
    } = this.state;

    const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
    // const { classes } = this.props;
    // const { selectedDate } = this.state;
    // const styles = {
    //   grid: {
    //     width: "60%"
    //   }
    // };
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <div className="Bookatrainer_wrapper">
          <Modal
            visible={this.props.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            className="Bookatrainer_modalform"
          >
            <div>
              <div className="Bookatrainer_form_content_par1">
                <div>
                  Hello <b>{`Micheal Spencer`}</b>
                </div>
                <div>
                  <span style={{ color: "orange" }}> Book Your Trainer </span> |
                  <a href="#">change</a>
                </div>
                <div className="mt-2">
                  {`John`}|
                  <span style={{ color: "orange" }}>{`BFSI Trainer`}</span>
                </div>
                <div>Add to Cart</div>
              </div>
              <div className="Bookatrainer_form_content_par2">
                <Rate className="modal_ratingstar_icon" />
                <span
                  style={{ fontSize: "3vw", color: "orange" }}
                >{`12 Kms|18 Mins`}</span>
                <button
                  style={{ fontSize: "3vw" }}
                  className="trainer_modal_slots_button"
                >
                  Show Available Slots
                </button>
              </div>
              <form name="submit" onSubmit={this.handleSubmit}>
                <div className="Bookatrainer_form_content_par3">
                  <div className="modal_details">
                    <div className="details_box">Name</div>
                    <div className="details_text_box">
                      <Input
                        placeholder="John"
                        value={username}
                        name="username"
                        onChange={this.handleChange}
                      />
                      <div
                        className="error"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          display: "flex"
                        }}
                      >
                        {usernameError}
                      </div>
                    </div>
                  </div>

                  <div className="modal_details">
                    <div className="details_box">When</div>
                    <div className="details_text_box">
                      <DatePicker
                        // defaultValue={moment("01/01/2015", dateFormatList[0])}
                        format={dateFormatList}
                        // value={date}
                        // name="date"
                        // onChange={this.handleChange}
                        disabledDate={current => {
                          return current && current < moment();
                        }}
                      />
                      <div
                        className="error"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          display: "flex"
                        }}
                      >
                        {dateError}
                      </div>
                    </div>
                  </div>
                  <div className="modal_details">
                    <div className="details_box">Time Slot</div>
                    <div className="details_text_box">
                      <TimePicker
                        use12Hours
                        format="h:mm a"
                        onChange={this.onChange}
                        className="bookatrainer_time_icon"
                      />
                    </div>
                  </div>
                  <div className="modal_details">
                    <div className="details_box">Price</div>
                    <div className="details_price_box">
                      <Input
                        type="number"
                        placeholder="USD 50$"
                        value={price}
                        name="price"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="details_price_box_text">
                      <a href="#">Use PROMO Code</a>
                      <div
                        className="error"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          display: "flex"
                        }}
                      >
                        {priceError}
                      </div>
                    </div>
                  </div>
                  <div className="modal_details">
                    <div className="details_box">Address</div>
                    <div className="details_text_box">
                      <Input
                        placeholder="User Adderss"
                        value={address}
                        name="address"
                        onChange={this.handleChange}
                      />
                      <div
                        className="error"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          display: "flex"
                        }}
                      >
                        {addressError}
                      </div>
                    </div>
                  </div>
                  <div className="modal_details">
                    <div className="details_box">Mobile</div>
                    <div className="details_text_box">
                      <Input
                        type="number"
                        placeholder="1234567890"
                        value={phonenumber}
                        name="phonenumber"
                        onChange={this.handleChange}
                      />
                      <div
                        className="error"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          display: "flex"
                        }}
                      >
                        {phonenumberError}
                      </div>
                    </div>
                  </div>
                  <div className="modal_details">
                    <div className="details_box">More.Info</div>
                    <div className="details_text_box">
                      {/* <TextArea placeholder="Training Venue Name" /> */}
                      <TextArea
                        rows={4}
                        value={textarea}
                        name="textarea"
                        onChange={this.handleChange}
                      />
                      <div
                        className="error"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          display: "flex"
                        }}
                      >
                        {textareaError}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="book_trainer_modal_button">
                  <button className="trainer_modal_cancel" onClick={this.handleCancel}>Cancel</button>
                  <button className="trainer_modal_book" value="submit" type="submit">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Bookatrainer;
