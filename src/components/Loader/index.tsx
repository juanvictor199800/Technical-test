import gif from './assets/loader.gif'
import './style.css'

const Loader = () => {
  return (
    <div className="loader">
      <img src={gif} alt="Loader..." />
    </div>
  )
}

export default Loader