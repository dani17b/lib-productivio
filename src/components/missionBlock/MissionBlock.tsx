import { ProfileProgressBar } from '../profileProgressBar/ProfileProgressBar';
import { TimeRemaining } from '../timeRemaining/TimeRemaining';
import './missionBlock.scss';


export enum MissionStatusEnum {
  EN_CURSO = 'En Curso',
  FINALIZADA = 'Finalizada',
}


// TO DO: 
// export interface Task{
//   taskName: string;
//   group: string;
//   deadline: Date;
//   status: MissionStatusEnum;
//   percentageCompleted: number;
// }

export interface MissionBlockProps {
  // task : Task;
  taskName: string;
  group: string;
  deadline: Date;
  status: MissionStatusEnum;
  percentageCompleted: number;
  backgroundColor?: string;
  progressBarColor?: string;
}


export const MissionBlock = (props: MissionBlockProps) => {

  const DEFAULT_PARENT_COLOR = 'azure';
  const DEFAULT_CHILD_COLOR = 'rgb(105, 228, 222)';
  
  const {
    // task,
    taskName,
    group,
    deadline,
    status,
    percentageCompleted,
    backgroundColor = DEFAULT_PARENT_COLOR,
    progressBarColor = DEFAULT_CHILD_COLOR,
  } = props;

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
          <div className="mission-block__task-name">
            {
              //task.taskName
              taskName
            }
          </div>
          <div className="mission-block__group-name">
            {
              //task.group
              group
            }
          </div>
        </div>

        <div className="mission-block__left">
          <div className="mission-block__time-left">
            {
              <TimeRemaining
                dueTime={
                  new Date(
                    //task.deadline
                    deadline
                  )
                }
                simpleDisplay={true}
              />
            }
          </div>
          <div className="mission-block__status" style={statusStyle}>
            {
              //task.status
              status
            }
          </div>
        </div>
      </div>
      <ProfileProgressBar
        completed={
          //task.percentageCompleted
          percentageCompleted
        }
        bgColor={'white'}
        completedColor={progressBarColor}
      />
    </>
  );
};
