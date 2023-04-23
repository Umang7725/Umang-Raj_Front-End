import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red',
      fontWeight: isSelected ? 'bold' : 'normal',
      color: isSelected ? 'white' : 'black',
      borderRadius: isSelected ? '10%' : '0',
      listStyleType: 'none',
      border: isSelected ? '2px solid black' : 'none',
      transform: isSelected ? 'scale(1.1)' : 'none',
      transition: 'transform 0.2s ease-in-out',
      cursor: 'pointer' ,
      letterSpacing: '0.8',
      margin: '10px', 
      height: '40px',
      padding:'2px',
      textAlign: 'center'
    }}
      onClick={onClickHandler}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
const SingleListItem = memo(WrappedSingleListItem);
// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  const listItems = items.map((item, index) => (
    <SingleListItem
      key={index}
      onClickHandler={() => handleClick(index)}
      text={item.text}
      index={index}
      isSelected={selectedIndex === index}
    />
  ));

  return (
    <ul style={{ textAlign: 'left' }}>
      {listItems}
    </ul>
  )
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;
