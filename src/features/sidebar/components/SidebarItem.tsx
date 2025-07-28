import React from 'react';
import Text from '../../../components/Text';
import './SidebarItem.css';
interface Props {
  icon: string;
  label: string;

}

const SidebarItem: React.FC<Props> = ({ icon, label }) => {

  return (
    <div className=" d-flex flex-row w-50">
      <i className={icon}></i>
      <Text text={label} />
    </div>
  );
};

export default SidebarItem;