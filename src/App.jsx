import { use } from "react";
import { useState, useEffect } from "react";

function App() {
  const listMovies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];
  console.log(listMovies);

  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(listMovies);

  useEffect(() => {
    console.log("i amrunning no");
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h1>
                <span className="me-2">🎬</span>Movies
              </h1>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <form class="d-flex" role="search">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Cerca film..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                  <ul className="list-group list-group-flush p-3">
                    {listMovies.map((movie, index) => (
                      <li key={index} className="list-group-item">
                        <strong>{movie.title}</strong> -{" "}
                        <span className="text-muted">{movie.genre}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
