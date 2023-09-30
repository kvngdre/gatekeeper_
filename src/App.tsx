import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import Counter from "./components/Counter";
import { Footer } from "./components/Footer";
import Form, { IUser } from "./components/Form/Form";
import { Header } from "./components/Header";
import { getUsers } from "./services/get-users.service";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [showCard, setCardVisibility] = useState(false);
  const [isCheckingIn, setCheckingIn] = useState(false);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [accessCode, setAccessCode] = useState("");
  const [foundUser, setFoundUser] = useState<IUser | undefined>(undefined);
  const [users, setUsers] = useState<IUser[]>([]);

  function update() {
    getUsers().then((result: IUser[]) => {
      const totalCount = result.reduce((p, c) => {
        if (c.isCheckedIn) {
          return (p += 1);
        }
        return p;
      }, 0);

      setCount(totalCount);
      setTotal(result.length);
      setUsers(result);
    });
  }

  setInterval(() => {
    update();
  }, 300_000);

  useEffect(() => update(), []);

  function handleSearch(accessCode: string) {
    setFoundUser(users.find((u) => u.accessCode === accessCode));

    setIsSearching(true);
    setCardVisibility(true);

    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  }

  function handleClose() {
    setCardVisibility(false);
    setAccessCode("");
  }

  function handleSearchChange(accessCode: string) {
    setAccessCode(accessCode);
  }

  function handleCheckIn(state: boolean) {
    setCheckingIn(state);
    setCardVisibility(true);
    update();
  }

  return (
    <>
      <Header />
      <Counter count={count} total={total} />
      <Form
        onSearch={handleSearch}
        isSearching={isSearching}
        onChange={handleSearchChange}
        accessCode={accessCode}
      />
      <Card
        isSearching={isSearching}
        onClose={handleClose}
        showCard={showCard}
        user={foundUser}
        onCheckIn={handleCheckIn}
        isCheckingIn={isCheckingIn}
        setUser={setFoundUser}
      />
      <Footer />
    </>
  );
}

export default App;
