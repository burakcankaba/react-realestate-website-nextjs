
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Map = () => {
    return (
        <MapContainer center={data.propCoordinat} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; TalaTourism'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={data.propCoordinat} icon={myIcon}>
                <Popup>
                    {data.propName}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map