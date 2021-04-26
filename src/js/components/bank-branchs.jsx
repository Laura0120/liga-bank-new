import React from "react";
import GoogleMapReact from 'google-map-react';

const BankBranchs = (props) => {
  const {} = props;
  const key = 'AIzaSyAMe9CfR61jshFAOQLeS3B5RlUg45KrQMo'
  const location =  {
    lat: 57.00, 
    lng: 77.30
  };
  const MapMarker = () => <div className='bank-branchs__map-marker'></div>;
  const zoom = 4.6;
  return (
    <section className='page-content__bank-branchs bank-branchs'>
      <h2>Отделения Лига Банка</h2>
      <div className='bank-branchs__map'>
        <GoogleMapReact
            bootstrapURLKeys={{ key: key}}
            defaultCenter={location}
            defaultZoom={zoom}
          >
            <MapMarker
              lat={61.2500000}
              lng={73.4166700}
            />
            <MapMarker
              lat={54.9924400}
              lng={73.3685900}
            />
            <MapMarker
              lat={55.0415000}
              lng={82.9346000}
            />
            <MapMarker
              lat={58.0104600}
              lng={56.2501700}
            />
            <MapMarker
              lat={57.1522200}
              lng={65.5272200}
            />
            <MapMarker
              lat={55.7887400}
              lng={55.7887400}
            />
            <MapMarker
              lat={51.5405600}
              lng={46.0086100}
            />
            <MapMarker
              lat={55.7522200}
              lng={37.6155600}
            />
      
          </GoogleMapReact>
      </div>
    </section>
  );
};

export default BankBranchs;
