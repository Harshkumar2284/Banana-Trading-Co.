import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Navbar from './components/layout/Navbar'
function App() {
  // const [cards, setCards] = useState([]);
  // const [money, setMoney] = useState(1000);
  // const [inventory, setInventory] = useState([]);

  // // UPDATE MARKET
  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/cards");
  //       setCards(response.data);
  //       console.log(cards);
  //     } catch (error) {
  //       console.error("Error fetching cards:", error);
  //     }
  //   }
  //   fetchCards();
  //   const interval = setInterval(fetchCards, 5000);
  //   return () => clearInterval(interval);
  // }, []);


  // COMPONENT RENDER
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path = "/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
