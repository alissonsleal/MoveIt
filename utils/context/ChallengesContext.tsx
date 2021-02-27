import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import LevelUpModal from '../../components/LevelUpModal';
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
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ChallengesContext = createContext({} as ChallengesData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [time, setTime] = useState(0.05 * 60);
  const [hasFinished, setHasFinished] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(null as any);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    setLevel(Number(localStorage.getItem('@moveit: level')) ?? 1);
    setCurrentExperience(
      Number(localStorage.getItem('@moveit: currentExperience')) ?? 0,
    );
    setChallengesCompleted(
      Number(localStorage.getItem('@moveit: challengesCompleted')) ?? 0,
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('@moveit: level', level.toString());
    localStorage.setItem(
      '@moveit: currentExperience',
      currentExperience.toString(),
    );
    localStorage.setItem(
      '@moveit: challengesCompleted',
      challengesCompleted.toString(),
    );
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsModalOpen(true);
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

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio para você!', {
        body: `Valendo ${activeChallenge.amount}xp`,
        image: '/favicon.svg',
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  let experienceToNextLevel = ((level + 1) * 4) ** 2;

  if (currentExperience >= experienceToNextLevel) {
    levelUp();
    setCurrentExperience(currentExperience - experienceToNextLevel);
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
        setIsModalOpen,
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};
