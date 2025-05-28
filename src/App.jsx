import MainRoutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
const App = () => {
    return (
        <div className="p-5 w-[80%] mx-auto font-thin">
            <Nav />
            <MainRoutes />
        </div>
    );
};

export default App;
