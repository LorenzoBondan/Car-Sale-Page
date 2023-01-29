import './styles.css';
import {ReactComponent as ProductImg} from 'assets/images/car-red.svg'; 
import ButtonIcon2 from 'components/ButtonIcon2';

function ProductCard() {
    return (
      <>
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <ProductImg />
            </div>

            <div className='card-bottom-container'>
                <div className='text-region'>
                    <h6>Audi Supra TT</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                
                <div className='button-region'>
                    <ButtonIcon2 />
                </div>
            </div>
        </div>
        
      </>
    );
  }

  export default ProductCard;