import React, { useEffect } from "react";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import "@reach/combobox/styles.css";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CInput,
} from "@coreui/react";

const SearchGoogleMaps = ({ input, setInput, setCoordinatesth }) => {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
    debounce: 300,
  });

  useEffect(() => {
    if (input.address) {
      setValue(input.address);
    }
  }, [input.address, setValue]);

  const handleInput = (event) => {
    // Update the keyword of the input element
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    setValue(event.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {

        if (setCoordinatesth) {
          setCoordinatesth([lat, lng]);
        }
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  return (
    <>
      <CDropdown>
        <CDropdownToggle
          style={{
            display: status === "OK" ? "inline" : "none",
            marginBottom: "-10px",
            marginRight: "-40px",
          }}
        ></CDropdownToggle>
        <CDropdownMenu show={status === "OK"}>
          {status === "OK" &&
            data.map((suggestion, index) => {
              const {
                structured_formatting: { main_text, secondary_text },
              } = suggestion;

              return (
                <CDropdownItem key={index} onClick={handleSelect(suggestion)}>
                  <p>
                    <strong>{main_text}</strong>
                    <br />
                    <small>{secondary_text}</small>
                  </p>
                </CDropdownItem>
              );
            })}
        </CDropdownMenu>
      </CDropdown>
      <CInput
        name="address"
        value={value}
        onChange={handleInput}
        placeholder="Digite um endereço"
        disabled={!ready}
      />
    </>
  );
};

export default SearchGoogleMaps;
