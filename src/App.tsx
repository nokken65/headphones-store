import "./App.css";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100%",
          width: "100%",
          minHeight: "100vh",
          height: "100%",
          position: "relative",
          background: "linear-gradient(75deg, #FF9292 -7.33%, #DE5150 90.21%)",
        }}
      >
        <h1>Hello</h1>
      </div>
      <div style={{ minHeight: "1000px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt eveniet officiis! Porro aperiam
        ullam, numquam cum error dolore molestias et voluptas nesciunt vitae fuga optio. Distinctio, tempore, assumenda
        doloribus exercitationem laudantium laborum incidunt voluptas provident a architecto necessitatibus impedit
        illum ipsa quae suscipit modi aliquid molestias alias nemo officia? H
      </div>
    </div>
  );
}

export default App;
