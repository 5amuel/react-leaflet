import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, LayersControl} from 'react-leaflet'
import teslaData from './data/tesla-site.json'



// const { BaseLayer} = LayersControl
function App() {
  
  const filteredStations = teslaData.filter(tesla => tesla.address.country === "Italy")

  return (
    <div className='map'>

   
    <MapContainer center={[34.756846, 12.114695]} zoom={4.5} scrollWheelZoom={true} zoomSnap={0.5} minZoom={4} >
      <LayersControl position='topright'>
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Carto">
        <TileLayer
            attribution='&copy; <a href="https://www.carto.com/">carto.com</a> contributors'
            url="https://www.google.cn/maps/vt?lyrs=s@189&gl=tr&x={x}&y={y}&z={z}"
        />
          {/* <TileLayer
            attribution='&copy; <a href="https://www.carto.com/">carto.com</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          /> */}
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Stations">
          <Marker position={[1.15735, 103.7]}>

          </Marker>
        </LayersControl.Overlay>
        
        <LayersControl.Overlay name="compresors">
          Marker
        </LayersControl.Overlay>
        
      </LayersControl>
      
      

      {filteredStations.map(tesla => (
        <Marker key={tesla.id} position={[tesla.gps.latitude, tesla.gps.longitude]}>
          <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
            <div>
              <h2>{"Name: " + tesla.name}</h2>
              <p>{"Status: " + tesla.status}</p>
              <p>{"Number of chargin stations: " + tesla.stallCount }</p>
            </div>
          </Popup>
        </Marker>  
      ))}

  </MapContainer>
  </div>
  );
}

export default App;
