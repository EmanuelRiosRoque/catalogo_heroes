import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers";

export const SearchPages = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q  = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;
  const { searchText, onInputChange } = useForm({searchText: q});

  //Funciones
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)  
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              className="form-control"
              type="text"
              name="searchText"
              placeholder="Search hero"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          
          <div className="alert alert-primary animate__animated  animate__fadeIn" style={{ display: showSearch ? '' : 'none'}}>
            Search hero
          </div>

          <div className="alert alert-danger animate__animated  animate__fadeIn" style={{ display: showError ? '' :  'none'}}>
            No hero {q} 
          </div>

            {
              heroes.map(hero => (
                <HeroCard 
                  key={hero.id}
                  heroe={hero}
                />
              ))
            }
        </div>
      </div>
    </>
  )
}
