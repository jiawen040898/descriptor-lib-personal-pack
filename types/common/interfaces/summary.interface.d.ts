import { DescriptorType, SupportedLegacyFrameworkType } from '../enums/job-application-score-type.enum';
import { DomainDetailType } from './descriptor.interface';
import { PersonalityDomainScore, PersonalityOutcome } from './personality.interface';
export interface ListItem {
    id: string | number;
    name: string;
}
export interface Additional4DescriptorResult {
    summary: {
        strengths: PersonalityOutcome[];
        development_areas: PersonalityOutcome[];
    };
    dimensions: PersonalityDomainScore[];
}
export interface Big5DescriptorResult {
    summary: {
        strengths: PersonalityOutcome[];
        development_areas: PersonalityOutcome[];
        average: string | null;
    };
    dimensions: PersonalityOutcome[];
}
export interface RiasecDescriptorResult {
    summary_highest_scores: PersonalityOutcome[];
    details: {
        dimension_highest_scores: PersonalityOutcome[];
        dimension_non_highest_scores: PersonalityOutcome[];
    };
}
export interface OrgValueDescriptorResult {
    summary: PersonalityOutcome[];
    dimensions: PersonalityOutcome[];
}
export interface TraitDescriptorDictionary {
    big_five: TraitDescriptorDictionaryType;
}
export declare type DomainDescriptorDictionary = {
    [key in SupportedLegacyFrameworkType]: DomainDescriptorDictionaryType;
};
declare type DomainDescriptorDictionaryType = {
    [key in DescriptorType]: DomainDetailType;
};
interface TraitDescriptorDictionaryType extends DomainDescriptorDictionaryType {
    dimensions: DomainDetailType;
}
export interface Dictionary<T> {
    [key: string]: T | null;
}
export {};
