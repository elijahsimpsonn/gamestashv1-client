/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import "./Dashboard.css";
import Main from "../../api/Main";
import ConsoleCard from "../../components/ConsoleCard/ConsoleCard";
import { GamestashContext } from "../../context/GamestashContext";
import AddConsoleForm from "../../components/AddConsoleForm/AddConsoleForm";

export default function Dashboard(props) {
  const { consoles, setConsoles, games, setGames } = useContext(
    GamestashContext
  );

  useEffect(() => {
    const fetchConsoles = async () => {
      try {
        const response = await Main.get("/consoles");
        setConsoles(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchConsoles();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await Main.get("/games");
        setGames(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGames();
  }, []);

  const currentConsoles = consoles.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
      <section>
        <div className="tally">
          <span>Total Games: {games.length}</span>
        </div>

        <>
          <AddConsoleForm />
          {currentConsoles.map((console) => {
            return (
              <ConsoleCard
                key={console.id}
                id={console.id}
                name={console.name}
              />
            );
          })}
        </>
      </section>
  );
}
