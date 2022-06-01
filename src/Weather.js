import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends React.Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                {this.props.weatherData.map((day, idx) => (
                    <Accordion.Item eventKey={idx} key={idx}>
                    <Accordion.Header>{day.date}</Accordion.Header>
                    <Accordion.Body>
                        {day.description}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion>
        )
    }
}

export default Weather;
