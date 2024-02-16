// Importing the Navbar component from the file "./Navbar"
import Navbar from "./Navbar";

// Importing the UserProvider component from the file "./UserProvider"
import { UserProvider } from "./UserProvider";

// Defining the main App component
function App() {
  // Rendering the JSX content
  return (
    // Wrapping the Navbar component with the UserProvider component
    <UserProvider>
      <Navbar />
    </UserProvider>
  );
}

// Exporting the App component as the default export
export default App;
