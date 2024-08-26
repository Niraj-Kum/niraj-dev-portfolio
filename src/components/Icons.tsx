/* eslint-disable @typescript-eslint/no-explicit-any */
import IconPlay from '../assets/icons/play.svg';
import IconPause from '../assets/icons/pause.svg';

interface IIcon {
    icon: string;
    style?: any;
    className?: any;
}

const icons = {
  play: IconPlay,
  pause: IconPause,
};

const Icon = ({ icon, style, className }: IIcon) => {
  const IconComponent = (icons as any)[icon];

  return (
    <IconComponent style={style} className={className} />
  );
};

export default Icon;
