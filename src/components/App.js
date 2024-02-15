import Navbar from "./Navbar";
import { UserProvider } from "./UserProvider";

function App() {
  return (
    
    <UserProvider>
      <Navbar />
    </UserProvider>
  );
}

export default App;
