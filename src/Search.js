import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Search extends React.Component {
    render() {
        return (
            <Form>
                <Form.Control onChange={this.props.changeHandler} placeholder={"search for a city!"} />
                <Button onClick={this.props.handleClick} type="submit">Explore!</Button>
            </Form>
        )
    }
}

export default Search;
