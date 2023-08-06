import NavBar from "../home/NavBar";
import Footer from "../home/Footer";
import Form from "../home/Form";
import SearchPopUp from "./SearchPopUp";
import SearchList from "./SearchList";

const Search = () => {
  return (
    <div>
      <NavBar />
      <SearchPopUp />
      <SearchList />
      <Form />
      <Footer />
    </div>
  );
};

export default Search;
