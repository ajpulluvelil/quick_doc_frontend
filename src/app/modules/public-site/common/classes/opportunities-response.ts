export class OpportunitiesResponse {
    id!: string;
    image!: string;
    title!: string;
    description!: string;
    numberOfVacancies!: number;
    tags!: string[];
    experienceRequired!: boolean;
    experienceEntryLevel!: number;
    experienceMaximumLevel!: number;

    constructor(
        id: string,
        image: string,
        title: string,
        description: string,
        numberOfVacancies: number,
        tags: string[],
        experienceRequired: boolean,
        experienceEntryLevel: number,
        experienceMaximumLevel: number
    ) {
        this.id = id,
        this.image = image,
        this.title = title,
        this.description = description,
        this.numberOfVacancies = numberOfVacancies,
        this.tags = tags,
        this.experienceRequired = experienceRequired,
        this.experienceEntryLevel = experienceEntryLevel,
        this.experienceMaximumLevel = experienceMaximumLevel
    }
}
