import ProductCard from "components/ProductCard";
import SearchButton from "components/SearchButton";
import './styles.css';

function Catalog() {
    return (
      <>
        <div className="catalog-container my-4">

          <div className="base-card search-bar-zone">
            <SearchButton />
          </div>

          <div className="row">

          <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>
            
              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

              <div className="item col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>

          </div>


        </div>
        
      </>
    );
  }

  export default Catalog;