import { useState } from 'react';

import Loader from '../components/Loader'
import Card from '../components/Card'
import Modal from '../components/Modal'
import dataCharacters from './data/response'

const Home = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, loading } = dataCharacters(`https://hp-api.onrender.com/api/characters`);

  if (loading) return <Loader />;

  const handleCardClick = (character: any) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <>
      <div className="title-section">
        <span>Technical Test</span>
        <span>Exercise A</span>
      </div>

      <div className="container">
        <section className='cards-section'>
          {data?.map((character) => ( <Card key={character.id} character={character} onCardClick={handleCardClick}/> ))}
        </section>
      </div>

      {isModalOpen && (
        <Modal character={selectedCharacter} onClose={closeModal} />
      )}
    </>
  )
}

export default Home