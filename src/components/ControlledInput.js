// Code ControlledInput Component Here

class Form extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
  
  render() {
    return (
      <form>
        <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
