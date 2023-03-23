import React, { useState } from 'react';
import './selectMenu.scss';

interface Props {
  /**
   * List of options
   */
  options: string[];
  /**
   * Selected option
   */
  onSelect: (option: string) => void;
  /**
   * Label for name the select menu
   */
  label: string;
  /**
   * Secondary label or default text showed on dropdown
   */
  selectString?: string;
  /**
   * Font size for label, select and options
   */
  fontSize?: number;
  /**
   * To assign a color for text and borders
   */
  color?: string;
}

export function SelectMenu(props: Props) {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const { options, onSelect, label, selectString, fontSize, color } = props;

  const commonStyle = {
    fontSize,
    color,
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown-menu">
      <label className="dropdown-menu-label" style={commonStyle}>{label}</label>
      <select
        style={commonStyle} 
        value={selectedOption}
        onChange={(event) => handleOptionClick(event.target.value)}
        className="dropdown-toggle"
      >
        <option value="" disabled style={commonStyle}>
          {selectString}
        </option>
        {options.map((option) => (
          <option key={option} value={option} style={commonStyle}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
