import { withAuthenticator } from "@aws-amplify/ui-react";
import './App.css';

function App() {
  return (
    <div>
      My App
    </div>
  );
}

export default withAuthenticator(App);