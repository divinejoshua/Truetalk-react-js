import animationData from './assets/animation.json';
import './App.css';
import Lottie from 'react-lottie';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Lottie
        options={defaultOptions}
          height={200}
          width={200}
        />
        <p>
         Truetalk messenger
        </p>
        <span
          className="comming-soon-span"
        >
          Coming soon . . .
        </span>
      </header>
    </div>
  );
}

export default App;
