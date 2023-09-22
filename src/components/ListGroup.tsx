import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Miami Heat", "Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "San Antonio Spurs"];
  let selectedIndex = 0;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className={if selectedIndex ==2} key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
