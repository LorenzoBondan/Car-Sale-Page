import ProductCard from "components/ProductCard";

function Catalog() {
    return (
      <>
        <div className="catalog-container my-4">

          <div className="base-card search-bar-zone">
            <button>botão de pesquisa</button>
          </div>

          <div className="row">

          <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>
            
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

          </div>


        </div>
        
      </>
    );
  }

  export default Catalog;