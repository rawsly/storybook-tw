import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ items, selectedItem, placeholder, fluid, onSelect }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => setIsOpened((prevIsOpened) => !prevIsOpened);
  const handleSelect = (item) => {
    setIsOpened(false);
    onSelect(item);
  };

  return (
    <DropdownContainer className="relative">
      <DropdownButton
        onClick={handleClick}
        className={`h-9 rounded-md border-1 rounded-md text-left px-4 text-sm leading-4 relative ${
          isOpened ? "border-primary" : "border-display-light"
        } ${fluid ? "w-max" : ""}`}
        isOpened={isOpened}
      >
        {selectedItem ? selectedItem.text : placeholder}
        <ChevronIcon className="absolute w-4 h-4 right-2.5 top-2.5">
          {isOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </ChevronIcon>
      </DropdownButton>
      {isOpened && (
        <ItemsContainer className={`absolute top-10 z-10 bg-white rounded-md border-1 rounded-md border-display-light text-left py-2 text-sm leading-4 ${fluid ? "w-max" : ""}`}>
          {items &&
            items.map((item) => {
              const isSelected = item.value === selectedItem.value;
              return (
                <Item
                  key={item.key}
                  value={item.value}
                  className={`leading-7 px-4 cursor-pointer flex flex-row justify-between items-center hover:bg-white-soft ${
                    isSelected ? "bg-white-soft" : "bg-white"
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {item.text}
                  {isSelected && <CheckIcon className="text-primary w-4 h-4" />}
                </Item>
              );
            })}
        </ItemsContainer>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedItem: PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  fluid: PropTypes.bool,
  onSelect: PropTypes.func,
};

Dropdown.defaultProps = {
  placeholder: "Select",
  selectedItem: null,
  fluid: false,
  onSelect: () => {},
};

export default Dropdown;

const DropdownContainer = styled.div``;
const ItemsContainer = styled.div``;
const Item = styled.div``;
const DropdownButton = styled.button``;
const ChevronIcon = styled.div``;
