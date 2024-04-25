import { DimensionLevel } from '../common/enums/descriptor.enum';
import { MapperTypeParams, RiasecCodes } from '../common/enums/job-application-score-type.enum';
import { DescriptorsWithScoreOutcomeOptions, DescriptorOptions, DescriptorSummary, DescriptorSummaryItem, DomainDetailsRes, GetDomainDetailsOptions } from '../common/interfaces/descriptor.interface';
import { PersonalityDomainScore, PersonalityOutcome, PersonalityScoreSummary, WorkScores } from '../common/interfaces/personality.interface';
import { Additional4DescriptorResult, Big5DescriptorResult, OrgValueDescriptorResult, RiasecDescriptorResult } from '../common/interfaces/summary.interface';
/**
 * Map Work Interest descriptor the highest domain score sort by R.I.A.S.E.C or Interest Riasec Codes
 */
export declare function mapWorkInterestDescriptors(scores: PersonalityOutcome[], personCodes: RiasecCodes[], jobCodes: RiasecCodes[], options?: DescriptorOptions): PersonalityOutcome[] | undefined;
export declare function getDescriptorSummary(personalityScoreSummary: PersonalityScoreSummary, options?: DescriptorOptions): DescriptorSummary | undefined;
export declare function getDescriptorSummaryItems(scores: PersonalityDomainScore[], type: MapperTypeParams, options?: DescriptorOptions): DescriptorSummaryItem[] | undefined;
/**
 * map descriptor / dimension level to personality outcome
 */
export declare function mapPersonalityScoreWithDescriptor(scores: PersonalityDomainScore[], type: MapperTypeParams, options?: DescriptorsWithScoreOutcomeOptions): PersonalityOutcome[];
export declare function mapScoreWithDescriptor(scores: WorkScores, type: MapperTypeParams, options?: DescriptorOptions): WorkScores;
export declare function getDomainDetails(scores: WorkScores, type: MapperTypeParams, options?: GetDomainDetailsOptions): DomainDetailsRes[] | undefined;
export declare function getDomainDetailByAlias(score: number, type: MapperTypeParams, alias: string, options?: DescriptorOptions): DomainDetailsRes | undefined;
export declare function getBig5Descriptors(scores: PersonalityDomainScore[], options?: DescriptorOptions): Big5DescriptorResult;
export declare function getOrgValuesDescriptor(scores: PersonalityDomainScore[], options?: DescriptorOptions): OrgValueDescriptorResult;
export declare function getRiasecDescriptor(scores: PersonalityDomainScore[], options?: DescriptorOptions): RiasecDescriptorResult;
export declare function getAdditional4Descriptor(scores: PersonalityDomainScore[], options?: DescriptorOptions): Additional4DescriptorResult;
/**
 * Get dimension level with HIGH (>0.7) and LOW (<0.3) and AVERAGE
 */
export declare function getDimensionLevelByScore(domainScore: number): DimensionLevel;
