import React from "react";
import Select from "react-select";
import CountryFlag from "react-country-flag";

const options = [
  { value: "fr", label: "Français", countryCode: "FR" },
  { value: "en", label: "English", countryCode: "GB" },
  // Ajoutez d'autres langues ici si nécessaire
];

const DropdownIndicator = (props) => {
  return (
    <CountryFlag
      countryCode={props.selectProps.value.countryCode}
      svg
      style={{
        width: "2em",
        height: "2em",
      }}
    />
  );
};

export default function LanguageSelector() {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  return (
    <div className="w-64">
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        components={{ DropdownIndicator }}
        className="text-black"
      />
    </div>
  );
}
