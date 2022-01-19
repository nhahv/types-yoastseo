import Assessor from "./assessor";

declare class SEOAssessor extends Assessor {
    constructor(researcher, options);
    calculatePenaltyPointsFullSupport: (rating: "bad" | "ok" | "good") => number;
    calculatePenaltyPointsPartialSupport: (rating: "bad" | "ok" | "good") => number;
    _allAssessmentsSupported: () => boolean;
    calculatePenaltyPoints: () => number;
    _ratePenaltyPoints: (totalPenaltyPoints: number) => number;
    calculateOverallScore: () => number;
}

export default SEOAssessor