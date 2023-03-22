import { formatDistanceToNow } from 'date-fns';
import es from 'date-fns/locale/es';
import './timeAgo.scss';

export interface TimeAgoProps {
  createdAt: Date;
  /**
   * Date format YYYY-MM-DDThh:mm:ss.sssZ
   */
  textColor?: string;
  /**
   * Color for the text
   */
}

export const TimeAgo = (props: TimeAgoProps) => {
  const { createdAt, textColor } = props;

  const timeAgo = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: es,
  });

  const ownColor = {
    color: textColor,
  };
  return (
    <span className="time" style={ownColor}>
      {timeAgo.replace('alrededor de', '')}
    </span>
  );
};
