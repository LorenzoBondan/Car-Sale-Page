
import './styles.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
        
        <div className="home-container">  
            
            <div className="base-card home-card">

                <div className="home-content-container">

                    <div>
                        <h1>Conheça o melhor catálogo do curso!</h1>
                        <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
                    </div>

                    <div>
                        
                        <div>
                            <Link to="/products">
                                <h1>botão aqui</h1>
                            </Link>
                        </div>

                    </div>
                    
                </div>

                <div className="home-image-container">
                    <h1>imagem aqui</h1>
                </div>
            </div>
        </div>

      </>
    );
  }
  
  export default Home;