function App() {
  const cities = ["Manila", "Anaheim", "Los Angeles", "New York", "Austin"];
  const newCities = cities.filter((city) => city !== "Austin");

  const person = [
    {
      id: 0,
      name: "Jason",
      age: 28,
    },
    {
      id: 1,
      name: "Jim",
      age: 38,
    },
    {
      id: 2,
      name: "Jack",
      age: 25,
    },
    {
      id: 3,
      name: "Joe",
      age: 21,
    },
    {
      id: 4,
      name: "Josh",
      age: 32,
    },
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {newCities.map((city, index) => (
          <li className="list-group-item" key={index}>
            {city}
          </li>
        ))}
      </ul>
      <hr />
      {person.length > 0 && (
        <div>
          {" "}
          <h1>Table</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">AGE</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {person.map((personData) => {
                return (
                  <tr key={personData.id}>
                    <td>{personData.id}</td>
                    <td>{personData.name}</td>
                    <td>{personData.age}</td>
                    <td>{personData.age < 25 ? "Young" : "Old"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default App;
