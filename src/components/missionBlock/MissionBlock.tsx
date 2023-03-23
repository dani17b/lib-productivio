import { ProfileProgressBar } from '../profileProgressBar/ProfileProgressBar';
import { TimeRemaining } from '../timeRemaining/TimeRemaining';
import './missionBlock.scss';

/* eslint no-unused-vars: 0 */
export enum MissionStatusEnum {
  EN_CURSO = 'En Curso',
  FINALIZADA = 'Finalizada',
}
export interface MissionBlockProps {
  taskName: string;
  group: string;
  deadline: Date;
  status: MissionStatusEnum;
  //status: string;
  percentageCompleted: number;
  backgroundColor?: string;
  progressBarColor?: string;
}

export const MissionBlock = (props: MissionBlockProps) => {
  const {
    taskName,
    group,
    deadline,
    status,
    percentageCompleted,
    backgroundColor = 'azure',
    progressBarColor = 'rgb(105, 228, 222)',
  } = props;

  let statusColor;
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
          <div className="mission-block__task-name">{taskName}</div>
          <div className="mission-block__group-name">{group}</div>
        </div>

        <div className="mission-block__left">
          <div className="mission-block__time-left">
            {
              <TimeRemaining
                dueTime={new Date(deadline)}
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
        completed={percentageCompleted}
        bgColor={'white'}
        completedColor={progressBarColor}
      />
    </>
  );
};
