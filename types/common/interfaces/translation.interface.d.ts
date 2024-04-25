import { SupportedLegacyFrameworkType } from '../enums';
import { DomainDetailType } from './descriptor.interface';
import { DomainDescriptorDictionary, TraitDescriptorDictionary } from './summary.interface';
export declare type DomainDescriptorSummaryDictionary = {
    [key in SupportedLegacyFrameworkType]: DescriptorSummaryType;
};
export declare type LocalizedDomainDetailType = Record<string, DomainDetailType>;
export interface DescriptorSummaryType {
    summary?: LocalizedDomainDetailType;
    thrive?: LocalizedDomainDetailType;
    workingWith?: LocalizedDomainDetailType;
    watchOut?: LocalizedDomainDetailType;
    descriptors?: LocalizedDomainDetailType;
    dimensions?: LocalizedDomainDetailType;
}
export interface Pronouns {
    [key: string]: {
        subjective: string;
        objective: string;
        possessiveAdjective: string;
        possessive: string;
        reflexive: string;
    };
}
export interface Verbs {
    [key: string]: {
        singular: string;
        plural: string;
    };
}
export interface Nouns {
    [key: string]: {
        singular: string;
        plural: string;
    };
}
export interface DescriptorModifiedFile {
    descriptor: {
        work_style_summary: DomainDetailType;
        work_value_summary: DomainDetailType;
        work_interest_summary: DomainDetailType;
        work_style: DomainDetailType;
        work_value: DomainDetailType;
        work_interest: DomainDetailType;
    };
    descriptor_summary: {
        domain_descriptor: DomainDescriptorDictionary;
        trait_descriptor: TraitDescriptorDictionary;
    };
    pronouns: Pronouns;
    verbs: Verbs;
    nouns: Nouns;
}
