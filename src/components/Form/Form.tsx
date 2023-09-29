import React from "react";

import SearchButton from "../SearchButton";

interface props {
  isSearching: boolean;
  onSearch: (accessCode: string) => void;
  accessCode: string;
  onChange: (accessCode: string) => void;
}

export interface IUser {
  id: string;
  name: string;
  gender: string;
  maritalStatus: string;
  phone: string;
  email: string;
  accessCode: string;
  isCheckedIn: boolean;
  checkInTime: Date | null;
}

// const initialState: IUser = {
//   id: "",
//   name: "",
//   gender: "",
//   maritalStatus: "",
//   phone: "",
//   email: "",
//   accessCode: "",
//   isCheckedIn: false,
//   checkInTime: null,
// };

export default function Form({
  isSearching,
  onSearch,
  accessCode,
  onChange,
}: props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center align-self-center">
      <h3 className="mb-6">Admit Guest</h3>
      <form
        className="d-flex"
        role="search"
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          onSearch(accessCode);
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by access code"
          aria-label="Search"
          value={accessCode}
          onChange={(e: React.SyntheticEvent) =>
            //@ts-ignore
            onChange(e.target.value.toUpperCase())
          }
        />
        <SearchButton isSearching={isSearching} />
        {/* Hello */}
      </form>
    </div>
  );
}
