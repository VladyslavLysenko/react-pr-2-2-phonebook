import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmtit = event => {
    event.preventDefault();
    //   console.log(this.state);
      this.props.onSubmit(this.state);
      this.reset();
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target.name);
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmtit}>
        <label>
          {' '}
          Name
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Contact{' '}
          <input
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}
