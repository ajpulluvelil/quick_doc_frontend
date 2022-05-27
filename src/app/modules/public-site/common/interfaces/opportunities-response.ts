export interface OpportunitiesResponse {
    id: string,
    image: string,
    title: string,
    description: string,
    numberOfVacancies: number,
    tags: string[],
    experienceRequired: boolean,
    experienceEntryLevel: number,
    experienceMaximumLevel: number
}
