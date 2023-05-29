import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, link, likes, name, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like-btn ${isLiked && 'element__like-btn_active'}`;

  function handleLikeClick() {
    return onCardLike(card);
  }

  function handleClick() {
    return onCardClick(card);
  }

  function handleDeleteClick() {
    return onCardDelete(card);
  }

  return (
    <article className='element'>
      <img className='element__image' src={link} alt={name} onClick={handleClick} />
      {isOwn && (
        <button
          className='element__trash-icon'
          type='button'
          aria-label='удалить'
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className='element__info'>
        <h2 className='element__name'>{name}</h2>
        <div className='element__like'>
          <button
            className={cardLikeButtonClassName}
            type='button'
            aria-label='лайк'
            onClick={handleLikeClick}
          ></button>
          <p className='element__like-counter'>{likes}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
