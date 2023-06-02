import { createContext } from "react"

import { QuizStatus, UserStats } from "../../types"

interface ContextState {
  status: QuizStatus
  next?: string
  quizKey?: string
  userStats: UserStats
  setUserStats: (stats: UserStats) => void
}

const INITIAL_CONTEXT_STATE: ContextState = {
  status: "neutral",
  next: undefined,
  quizKey: undefined,
  userStats: {
    score: 0,
    average: [],
    completed: JSON.stringify({}),
  },
  setUserStats: () => {},
}

export const QuizzesHubContext = createContext(INITIAL_CONTEXT_STATE)
