import './styles.css';


function SearchButton() {
  return (
    <>
      <div className='btn-search-container'>

      <div className="field-search-container">
        <input type="text" placeholder="Digite sua busca" />
      </div>

      <div className="btn-search-container-button">
        <button>BUSCAR</button>
      </div>

      </div>
    </>
  );
}

export default SearchButton;