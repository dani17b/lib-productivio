import Lottie from 'lottie-react';
import LoadingAnimation from '../../animations/LoadingAnimation.json';

const DEFAULT_SIZE = 150;

export interface LoadingAnimationProps {
  /**
   * If false, it only will be played once. Otherwise will be looping itself.
   */
  loop?: boolean;
  /**
   * If true, the animation will start to be played the moment if renders.
   */
  autoplay?: boolean;
  /**
   * The size for height and width of the loading animation
   */
  size?: number;
}

export const Loading = (props: LoadingAnimationProps) => {
  const { loop, autoplay, size } = props;
  return (
    <div style={{ height: size || DEFAULT_SIZE, width: size || DEFAULT_SIZE }}>
      <Lottie
        autoplay={autoplay || false}
        loop={loop || false}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
        animationData={LoadingAnimation}
        height={size || DEFAULT_SIZE}
        width={size || DEFAULT_SIZE}/>
    </div>
  );
};
