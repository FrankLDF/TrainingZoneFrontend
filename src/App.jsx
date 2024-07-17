import ProviderData from "./context/ProviderContext";
import OutRoutes from "./routes/OutRoutes";

function App() {
  return (
    <>
      <ProviderData>
        <OutRoutes />
      </ProviderData>
    </>
  );
}

export default App;
