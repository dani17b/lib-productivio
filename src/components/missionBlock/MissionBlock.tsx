import { ProfileProgressBar } from '../profileProgressBar/ProfileProgressBar';
import { TimeRemaining } from '../timeRemaining/TimeRemaining';
import './missionBlock.scss';

export enum MissionStatusEnum {
  POR_HACER = 'Por hacer',
  EN_CURSO = 'En Curso',
  FINALIZADA = 'Finalizada',
}

export interface Task {
  name: string;
  team: string;
  endDate: string;
  progress: number;
}

export interface MissionBlockProps {
  task: Task;
  backgroundColor?: string;
  progressBarColor?: string;
}

export const MissionBlock = (props: MissionBlockProps) => {
  const DEFAULT_PARENT_COLOR = 'azure';
  const DEFAULT_CHILD_COLOR = 'rgb(105, 228, 222)';

  const {
    task,
    backgroundColor = DEFAULT_PARENT_COLOR,
    progressBarColor = DEFAULT_CHILD_COLOR,
  } = props;

  let status = MissionStatusEnum.POR_HACER;
  if (task.progress > 0 && task.progress < 100) {
    status = MissionStatusEnum.EN_CURSO;
  } else if (task.progress == 100) {
    status = MissionStatusEnum.FINALIZADA;
  }

  let statusColor;
  //switch (task.status)
  switch (status) {
    case MissionStatusEnum.EN_CURSO:
      statusColor = 'red';

      break;
    case MissionStatusEnum.FINALIZADA:
      statusColor = 'green';
      break;
  }

  const containerStyle = {
    backgroundColor,
  };

  const statusStyle = {
    color: statusColor,
  };

  return (
    <>
      <div className="mission-block__container" style={containerStyle}>
        <div className="mission-block__left">
          <div className="mission-block__task-name">{task.name}</div>
          <div className="mission-block__group-name">{task.team}</div>
        </div>

        <div className="mission-block__right">
          <div className="mission-block__time-left">
            {
              <TimeRemaining
                dueTime={new Date(task.endDate)}
                simpleDisplay={true}
              />
            }
          </div>
          <div className="mission-block__status" style={statusStyle}>
            {status}
          </div>
        </div>
      </div>
      <ProfileProgressBar
        completed={task.progress}
        bgColor={'white'}
        completedColor={progressBarColor}
      />
    </>
  );
};
