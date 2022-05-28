import React from 'react';
import Alert from 'react-bootstrap/Alert';

class Error extends React.Component {
    render() {
        return (
            <Alert variant='danger'> {this.props.errorMessage} </Alert>
        )
    }

}
export default Error;
