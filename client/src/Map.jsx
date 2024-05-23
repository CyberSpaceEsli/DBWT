import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function Map() {
  return (
   <div id="mapAnchor" className="flex justify-center items-center mt-20 md:container md:mx-auto md:p-6 rounded-lg bg-indigo-50 h-[400px] md:h-[550px] lg:h-[650px]">
    <MapContainer className="rounded-lg" center={[50.8284, 12.9103]} zoom={12} scrollWheelZoom={false}>
        <TileLayer 
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
   </div>
  );
}