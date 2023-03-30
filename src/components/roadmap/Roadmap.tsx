import './roadmap.scss';

enum TaskStatusEnum {
  EN_CURSO = 'En Curso',
  FINALIZADA = 'Finalizada',
}

interface RoadmapStyle {
  circleSize: number;
  circleColor: string;
  lineColor: string;
  lineHeight: number;
}

interface RoadmapProps {
  taskDate: Date;
  taskName?: string;
  levelName?: string;
  status?: TaskStatusEnum;
  style: RoadmapStyle;
}

export const Roadmap = (props: RoadmapProps) => {
  return (
    <div className="roadmap-container">
      <div className="roadmap-container__left-column"></div>
      <div className="roadmap-container__center-column">
        <div className="roadmap-container__circle"></div>
        <div className="roadmap-container__line"></div>
      </div>
      <div className="roadmap-container__right-column"></div>
    </div>
  );
};
