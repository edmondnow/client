import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'


class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature')
    });
  };


  render() {
    //redux form provides handleSubmit props
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field 
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        { this.props.errorMessage }
        <button>Sign up!</button>
      </form>
    )
  }
}


const mapStateToProps = ({ auth: { errorMessage }}) => { return { errorMessage }; }


export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
  )(Signup);

//export default connect(null, actions)(reduxForm({ form: 'signup' })(Signup));