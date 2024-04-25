import { DimensionLevel } from '../enums/descriptor.enum';
import { DimensionType, LegacyBig5Type } from '../enums/job-application-score-type.enum';
export interface ScoreSummary {
    role_fit?: RoleFit;
    work_style?: WorkScores;
    work_value?: WorkScores;
    work_interest?: WorkScores;
    reasoning_verbal?: Reasoning;
    reasoning_logical?: Reasoning;
    reasoning_numeric?: Reasoning;
    hard_skill?: HardSkill;
    reasoning_average?: Reasoning;
}
interface RoleFit {
    outcome?: PersonalityDomainScore[] | IngredientScore[];
    score_value?: number;
    score_percentile?: number | null;
}
export interface WorkScores {
    outcome?: PersonalityOutcome[] | IngredientOutcome[];
    score_value?: number;
    score_percentile?: number | null;
}
interface Reasoning {
    score_value?: number;
    score_percentile?: number | null;
}
interface HardSkill {
    outcome?: Array<{
        name: string;
        match: boolean;
    }> | null;
    score_value?: number;
    score_percentile?: number | null;
}
declare type BackwardsCompatibilityTypes = DimensionType | LegacyBig5Type | null;
export interface PersonalityOutcome extends PersonalityDomainScore {
    descriptor?: string | null;
    dimension_level?: DimensionLevel | null;
    required_dimension_level?: DimensionLevel | null;
    dimension_overviews?: TraitOutcome[];
    trait_descriptors?: TraitOutcome[];
    type?: BackwardsCompatibilityTypes;
}
export interface IngredientOutcome extends IngredientScore {
    descriptor?: string | null;
}
export interface TraitOutcome extends PersonalityTraitScore {
    dimension_type?: DimensionType | null;
    type?: BackwardsCompatibilityTypes;
    descriptor?: string | null;
}
export interface IngredientScore {
    ingredient_id?: number;
    ingredient_alias?: string;
    ingredient_score?: number;
    ingredient_order?: number;
    ingredient_percentile?: number;
    ingredient_dimension?: number;
    ingredient_weightage?: number;
}
export interface PersonalityDomainScore {
    domain_id?: number;
    domain_alias?: string;
    domain_score?: number;
    domain_order?: number | 1;
    domain_percentile?: number;
    domain_dimension?: number;
    domain_weightage?: number;
    domain_name?: string;
    model_type_id?: number;
    dimension_type?: DimensionType | null;
    traits?: PersonalityTraitScore[];
}
export interface PersonalityTraitScore {
    trait_id?: number;
    trait_alias?: string;
    trait_name?: string;
    trait_order?: number;
    trait_score?: number;
    trait_percentile?: number;
    trait_framework?: string;
    trait_weightage?: number;
}
export interface PersonalityScoreSummary {
    work_style: PersonalityDomainScore[];
    work_value: PersonalityDomainScore[];
    work_interest: PersonalityDomainScore[];
}
export interface DomainItem {
    domain_alias: string;
    domain_name?: string;
    custom_domain_descriptor_id?: number;
    descriptor?: string;
    dimension_type?: string | DimensionType;
    domain_id?: number;
    domain_order?: number;
    model_type_id?: number;
    traits?: TraitItem[];
    has_traits?: boolean;
    total_score?: number;
    question_count?: number;
}
export interface DomainScoreItem extends DomainItem {
    domain_score: number;
}
export interface TraitItem {
    trait_id: number;
    trait_alias: string;
    descriptors?: string[];
    trait_name?: string;
    trait_order?: number;
    trait_score?: number;
    question_count?: number;
    total_score?: number;
    dimension_type?: string | DimensionType;
    custom_trait_descriptor_id?: number;
}
export {};
