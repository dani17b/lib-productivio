import { formatDistanceToNow } from 'date-fns';
import es from 'date-fns/locale/es';
import './timeAgo.scss';

export interface TimeAgoProps {
  /**
   * Date format YYYY-MM-DDThh:mm:ss.sssZ
   */
  createdAt: Date;

  /**
   * Color for the text
   */
  textColor?: string;
}

export const TimeAgo = (props: TimeAgoProps) => {
  const { createdAt, textColor } = props;

  const timeAgo = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: es,
  });

  return (
    <span className="time" style={{ color: textColor }}>
      {timeAgo.replace('alrededor de', '')}
    </span>
  );
};
