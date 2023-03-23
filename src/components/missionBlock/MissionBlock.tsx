import { ProfileProgressBar } from '../profileProgressBar/ProfileProgressBar';
import { TimeRemaining } from '../timeRemaining/TimeRemaining';
import './missionBlock.scss';

/*export enum MissionStatusEnum{
    EN_CURSO = 'En Curso',
    FINALIZADA = 'Finalizada'
}*/
export interface MissionBlockProps {
  taskName: string;
  group: string;
  deadline: Date;
  /* status: MissionStatusEnum;*/
  status: string;
  percentageCompleted: number;
}

export const MissionBlock = (props: MissionBlockProps) => {
  const { taskName, group, deadline, status, percentageCompleted } = props;

  //  let statusColor;
  //   switch (status){
  //     case MissionStatusEnum.EN_CURSO:
  //         statusColor = "red";
  //     case MissionStatusEnum.FINALIZADA:
  //         statusColor = 'green';
  //   }

  return (
    <>
      <div className="mission-block__container">
        <div className="mission-block__left">
          <div className="mission-block__task-name">{taskName}</div>
          <div className="mission-block__group-name">{group}</div>
        </div>

        <div className="mission-block__left">
          <div className="mission-block__time-left">
            {<TimeRemaining dueTime={new Date(deadline)} />}
          </div>
          <div className="mission-block__status">{status}</div>
        </div>
      </div>
      <ProfileProgressBar
        completed={percentageCompleted}
        bgColor={'white'}
        completedColor="rgb(105, 228, 222)"
      />
    </>
  );
};
