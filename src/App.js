import Data from "./data.json";
import Card from "./card.js";
function App() {
  return (
    <div className="App">
      <div className="posts">
        {Data.map((value) => {
          return (
            <Card 
            key={value.id}
            id={value.id}
            name = {value.name}
            phone = {value.phone}
            city = {value.address.city}
            website = {value.website}
            description = {value.company.catchPhrase}
            username = {value.username}
            company = {value.company.name}
            zipcode = {value.address.zipcode}
            street = {value.address.street}
            suite = {value.address.suite}
            />
          );
        })}
      </div> 
    </div>
  );
}

export default App;
