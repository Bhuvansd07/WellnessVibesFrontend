export interface Iworkout {
    id?: number,
    username: string,
    fitnessLevel: string,
    goal: string,
    tDuration: number,
    exercises: Array<IRoutines>
}

export interface IRoutines{
    exerciseType: string,
    duration: number,
    intensity: string
}
