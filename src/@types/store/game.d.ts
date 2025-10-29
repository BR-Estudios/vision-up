interface GameStore {
  game: Game
  update: (data: Partial<Game>) => void
  reset: () => void
}

interface Game {
  vps: number
  vpsOffline: number
  vision: number
}