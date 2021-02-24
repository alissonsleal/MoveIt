import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import challenges from '../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'eye' | 'body';
  description: string;
  amount: number;
}

interface ChallengesData {
  levelUp: () => void;
  startNewChallenge: () => void;
  challengeCompleted: Function;
  resetChallenge: () => void;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  hasFinished: boolean;
  setHasFinished: Dispatch<SetStateAction<boolean>>;
  experienceToNextLevel: number;
}

export const ChallengesContext = createContext({} as ChallengesData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [time, setTime] = useState(25 * 60);
  const [hasFinished, setHasFinished] = useState(false);

  const [activeChallenge, setActiveChallenge] = useState(null as any);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function challengeCompleted(amount: number) {
    setChallengesCompleted(challengesCompleted + 1);
    setCurrentExperience(currentExperience + amount);
    resetChallenge();
  }

  function resetChallenge() {
    setActiveChallenge(null);
    setTime(25 * 60);
    setHasFinished(false);
  }

  let experienceToNextLevel = ((level + 1) * 4) ** 2;

  if (currentExperience >= experienceToNextLevel) {
    levelUp();
  }

  return (
    <ChallengesContext.Provider
      value={{
        levelUp,
        startNewChallenge,
        challengeCompleted,
        resetChallenge,
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        time,
        setTime,
        hasFinished,
        setHasFinished,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
