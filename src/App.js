import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Project coded by{" "}
            <a
              href="http://www.shecodes.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              SheCodes
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/codingcalypso/shecodes-dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://gregarious-stardust-b68237.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
