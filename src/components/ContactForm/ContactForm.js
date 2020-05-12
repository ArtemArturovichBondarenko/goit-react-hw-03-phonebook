import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
          <h2>Number</h2>
          <input
            type="tel"
            required
            placeholder="___-__-__"
            title="Формат: 999-99-99"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
          ></input>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
