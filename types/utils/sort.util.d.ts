import { DescriptorSummaryItem } from '../common/interfaces/descriptor.interface';
import { DomainScoreItem, PersonalityOutcome } from '../common/interfaces/personality.interface';
import { DimensionLevel } from '../common/enums';
/**
 * Get the top x scores from the list
 */
export declare function getTopScoringDomains(scores: DomainScoreItem[], limit?: number): DomainScoreItem[] | null;
export declare function sortDescriptorSummaryItemScores(scores: DescriptorSummaryItem[], sortBy: DimensionLevel): DescriptorSummaryItem[];
export declare function sortDomainOrder(a: PersonalityOutcome, b: PersonalityOutcome): number;
/**
 * Sort domain weight in descending order, else by domain alias ascending order
 */
export declare function sortDomainWeight(a: PersonalityOutcome, b: PersonalityOutcome): number;
