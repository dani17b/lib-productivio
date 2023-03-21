import { formatDistanceToNow } from 'date-fns';
import es from 'date-fns/locale/es';
import './timeAgo.scss';

export interface TimeAgoProps {
  createdAt: Date;
}

export const TimeAgo = (props: TimeAgoProps) => {
  const { createdAt } = props;

  const timeAgo = formatDistanceToNow(createdAt, {
    addSuffix: false,
    locale: es,
  });

  return <span className="time">{timeAgo}</span>;
};
