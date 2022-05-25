import React from 'react';
import Image from 'react-bootstrap/Image';

class Map extends React.Component {
    render() {
        return (
            <>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationName.lat},${this.props.locationName.lon}&zoom=12`}alt={`Map of Location Searched`}
            />
            </>
        ) 
    }
}
export default Map;