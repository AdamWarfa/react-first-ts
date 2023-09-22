import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Miami Heat", "Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "San Antonio Spurs"];

  return (
    <div>
      <ListGroup items={items} heading="NBA TEAMS" />
    </div>
  );
}

export default App;
