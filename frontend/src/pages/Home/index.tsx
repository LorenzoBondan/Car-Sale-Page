import { ReactComponent as CarImg} from 'assets/images/car-yellow.svg';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

function Home() {
    return (
      <>
        
        <div className="home-container">  
            
            <div className='base-card topper-card'> 

                <div className='image-zone'>
                    <CarImg />
                </div>

                <div className='text-zone-topper'>
                    <h1>O carro perfeito para você</h1>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>

            </div>

            <div className='base-card bottom-card'>

                <div className='region-btn'>
                    <ButtonIcon />
                </div>
                    


                <div className='text-zone-bottom'>
                    <h2>Comece agora a navegar</h2>
                </div>

            </div>

        </div>

      </>
    );
  }
  
  export default Home;