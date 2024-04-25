export declare enum JobApplicationScoreType {
    ROLE_FIT = "role_fit",
    CULTURE_FIT = "culture_fit",
    HARD_SKILL = "hard_skill",
    WORK_EXPERIENCE = "work_experience",
    REASONING_LOGICAL = "reasoning_logical",
    REASONING_NUMERIC = "reasoning_numeric",
    REASONING_VERBAL = "reasoning_verbal",
    REASONING_AVERAGE = "reasoning_average",
    WORK_STYLE = "work_style",
    WORK_VALUE = "work_value",
    WORK_INTEREST = "work_interest",
    BIG_FIVE = "big_five",
    ADDITIONAL_FOUR = "additional_four",
    JOB_OUTCOME = "job_outcome"
}
export declare type RiasecCodes = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';
export declare type MapperTypeParams = JobApplicationScoreType.WORK_STYLE | JobApplicationScoreType.WORK_VALUE | JobApplicationScoreType.WORK_INTEREST;
export declare type SupportedLegacyFrameworkType = JobApplicationScoreType.BIG_FIVE | JobApplicationScoreType.ADDITIONAL_FOUR | JobApplicationScoreType.CULTURE_FIT | JobApplicationScoreType.WORK_INTEREST | JobApplicationScoreType.JOB_OUTCOME | JobApplicationScoreType.WORK_VALUE | JobApplicationScoreType.WORK_STYLE;
export declare enum DescriptorType {
    SUMMARY = "summary",
    THRIVE = "thrive",
    WORKING_WITH = "working_with",
    WATCH_OUT = "watch_out",
    DESCRIPTORS = "descriptors"
}
export declare enum DimensionType {
    STRENGTH = "strength",
    AVERAGE = "average",
    DEVELOPMENT = "development",
    DEVELOPMENT_AREA = "development_area"
}
export declare enum LegacyBig5Type {
    STRENGTH = "Strength",
    AVERAGE = "Average",
    DEVELOPMENT = "Development"
}
