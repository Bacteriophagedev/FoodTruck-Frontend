import { useState } from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

interface Place {
  id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  formatted_address: string;
}

const FindARestaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching for places:", error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for restaurant..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
        libraries={["places"]}
      >
        <GoogleMap
          center={{ lat: 6.443166255950928, lng: 3.5423943996429443 }}
          zoom={14}
          mapContainerStyle={{ height: "700px", width: "950px" }}
        >
          {searchResults.map((place: Place) => (
            <Marker
              key={place.id}
              position={{
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
              }}
              onClick={() => setSelectedPlace(place)}
            />
          ))}
          {selectedPlace && (
            <InfoWindow
              position={{
                lat: selectedPlace.geometry.location.lat,
                lng: selectedPlace.geometry.location.lng,
              }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.name}</h2>
                <p>{selectedPlace.formatted_address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default FindARestaurant;


// import React, { useState } from 'react';
// import { Slider, TextField } from '@material-ui/core';
// import { Typography, Button } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

// export default class FindARestaurant extends React.Component {

//   header = () => {
//       return (
//         <div>
//           <div style={{ backgroundColor: "pink"}}>
//             <Typography variant='h4' style={{ textAlign: "center"}}>
//               Find a Restaurant
//             </Typography>
//             <TextField label="Search for restaurant..."
//             variant="outlined"
//             style ={{width: "100%"}} />
//             <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
//               <Typography>
//                 Distance:
//               </Typography>
//             <Slider style={{width: "75%"}}/>
//             </div>
//             <div>
//               <Button variant="outlined" style={{ width: "50%"}}>
//                 <RestartAltIcon />
//                 Reset
//               </Button>
//               <Button variant="contained" style={{ width: "50%"}}>
//                 <SearchIcon />
//                 Search
//               </Button>
//         </div>
//       )
//   }

//         <div style={{ backgroundColor: "cyan"}}>
//           Map
//         </div>
//         </div>
//       )
//     }
//   }
// }
