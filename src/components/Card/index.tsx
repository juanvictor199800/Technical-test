import genericImg from './assets/harry.jpg'

interface CardProps {
  character: any;
  onCardClick: (character: any) => void;
}

const Card = ({...props}: CardProps) => {
  const { character, onCardClick } = props;

  return (
    <div 
      style={{backgroundImage: `url(${character.image || genericImg})`}}
      onClick={() => onCardClick(character)}
    >
      <span className="title">{character.name}</span>
    </div>
  )
}

export default Card