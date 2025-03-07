
import { useState } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import t from "@/public/t.svg";

const gooseIcon = new Icon({
    iconUrl: "../../public/t.svg", // Add a goose icon to your public folder
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Styled components
const MapContainerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 2rem auto 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(76, 0, 153, 0.4);
  
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 300px;
  }
`;

const MapTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00843D, rebeccapurple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Goose sighting locations
const geeseSightings = [
    {
        id: 1,
        position: [42.3505, -71.1054], // Boston University
        title: "BU Beach",
        description: "Spotted a group of 5 geese by the Charles River"
    },
    {
        id: 2,
        position: [42.3554, -71.0693], // Boston Common
        title: "Boston Common",
        description: "Family of geese swimming in the pond"
    },
    {
        id: 3,
        position: [42.3601, -71.0589], // Public Garden
        title: "Public Garden",
        description: "Geese mingling with the swan boats"
    }
];

export default function GeeseMap() {
    const [activeMarker, setActiveMarker] = useState(null);

    return (
        <>
            <MapTitle>Boston Geese Sighting Map</MapTitle>
            <MapContainerWrapper>
                <MapContainer
                    center={[42.3601, -71.0589]}
                    zoom={13}
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {geeseSightings.map((sighting) => (
                        <Marker
                            key={sighting.id}
                            position={sighting.position}
                            icon={gooseIcon}
                            eventHandlers={{
                                click: () => setActiveMarker(sighting.id)
                            }}
                        >
                            <Popup>
                                <strong>{sighting.title}</strong>
                                <p>{sighting.description}</p>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </MapContainerWrapper>
        </>
    );
}