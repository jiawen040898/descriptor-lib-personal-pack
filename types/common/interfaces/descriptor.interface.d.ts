import { DimensionLevel, Perspective, RiasecCodes } from '../enums';
export declare type DomainDetailType = Record<string, DomainDetail>;
export interface WorkStyleDescriptors {
    achievement_effort: DomainDetail;
    persistence: DomainDetail;
    initiative: DomainDetail;
    leadership: DomainDetail;
    cooperation: DomainDetail;
    concern_for_others: DomainDetail;
    social_orientation: DomainDetail;
    self_control: DomainDetail;
    stress_tolerance: DomainDetail;
    adaptability_flexibility: DomainDetail;
    dependability: DomainDetail;
    attention_to_detail: DomainDetail;
    integrity: DomainDetail;
    independence: DomainDetail;
    innovation: DomainDetail;
    analytical_thinking: DomainDetail;
}
export interface WorkValueDescriptors {
    achievement: DomainDetail;
    working_conditions: DomainDetail;
    recognition: DomainDetail;
    relationships: DomainDetail;
    support: DomainDetail;
    independence: DomainDetail;
}
export interface WorkInterestDescriptors {
    realistic: DomainDetail;
    investigative: DomainDetail;
    artistic: DomainDetail;
    social: DomainDetail;
    enterprising: DomainDetail;
    conventional: DomainDetail;
}
export interface Big5Descriptors {
    emotional_stability: DomainDetail;
    extraversion: DomainDetail;
    openness_to_experience: DomainDetail;
    agreeableness: DomainDetail;
    conscientiousness: DomainDetail;
}
export interface Big5TraitDescriptors {
    anxiety: DomainDetail;
    anger: DomainDetail;
    depression: DomainDetail;
    self_consciousness: DomainDetail;
    immoderation: DomainDetail;
    vulnerability: DomainDetail;
    friendliness: DomainDetail;
    gregariousness: DomainDetail;
    assertiveness: DomainDetail;
    activity_level: DomainDetail;
    excitement_seeking: DomainDetail;
    cheerfulness: DomainDetail;
    imagination: DomainDetail;
    artistic_interests: DomainDetail;
    emotionality: DomainDetail;
    adventurousness: DomainDetail;
    intellect: DomainDetail;
    liberalism: DomainDetail;
    trust: DomainDetail;
    morality: DomainDetail;
    altruism: DomainDetail;
    cooperation: DomainDetail;
    modesty: DomainDetail;
    sympathy: DomainDetail;
    self_efficacy: DomainDetail;
    orderliness: DomainDetail;
    dutifulness: DomainDetail;
    achievement_striving: DomainDetail;
    self_discipline: DomainDetail;
    cautiousness: DomainDetail;
}
export interface Addtional4Descriptors {
    core_self_evaluations: DomainDetail;
    performance_orientation: DomainDetail;
    mastery_orientation: DomainDetail;
    self_monitoring: DomainDetail;
}
export interface DomainDetail {
    name: string;
    high_description: string;
    mid_description: string;
    low_description: string;
    summary: string;
    question_contents: QuestionContents[];
}
export interface ProcessingDomainDetail extends DomainDetail {
    id?: number;
    alias: string;
}
export interface DomainDetailsRes {
    framework_alias: string;
    domain_alias?: string;
    domain_score?: number;
    domain_descriptor: string;
    summary: string;
    question_title: string;
    question_contents: QuestionContents[];
}
export interface QuestionContents {
    question: string;
    additionals: string[];
}
export interface DescriptorSummaryItem {
    name: string;
    score?: number;
}
export interface DescriptorSummary {
    thrive: DescriptorSummaryItem[];
    working_with: DescriptorSummaryItem[];
    watch_out: DescriptorSummaryItem[];
}
interface DescriptorBasicOption {
    name?: string;
    perspective?: Perspective;
}
export interface DescriptorOptions extends DescriptorBasicOption {
    locale?: string;
}
export interface DescriptorsWithScoreOutcomeOptions extends DescriptorOptions {
    sort?: boolean;
}
export interface GetDomainDetailsOptions extends DescriptorOptions {
    size?: number;
    jobCodes?: RiasecCodes[];
}
export interface GetAdditional4DescriptorOptions {
    name: string;
    locale?: string;
}
export interface DescriptorSummaryOptions extends DescriptorOptions {
    dimensionLevel?: DimensionLevel;
    withScore?: boolean;
}
export {};
