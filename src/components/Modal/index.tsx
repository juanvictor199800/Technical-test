import genericImage from '../Card/assets/harry.jpg'
import './style.css'

const Modal = ({ character, onClose }: { character: any; onClose: () => void }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close" onClick={onClose}>x</div>
        <div className="col-2">
          <div className='image' style={{backgroundImage: `url(${character.image || genericImage})`}}>
          </div>
          <div className="information">
            <h2>{character.name}</h2>
            <p> <strong>Species: </strong> {character.species || 'N/A'}</p>
            <p> <strong>Gender: </strong> {character.gender || 'N/A'}</p>
            <p> <strong>House: </strong> {character.house || 'N/A'}</p>
            <p> <strong>Date of birth: </strong> {character.dateOfBirth || 'N/A'}</p>
            <p> <strong>Year of birth: </strong> {character.yearOfBirth || 'N/A'}</p>
            <p> <strong>Wizard: </strong> {character.wizard || 'N/A'}</p>
            <p> <strong>Ancestry: </strong> {character.ancestry || 'N/A'}</p>
            <p> <strong>EyeColour: </strong> {character.eyeColour || 'N/A'}</p>
            <p> <strong>HairColour: </strong> {character.hairColour || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;