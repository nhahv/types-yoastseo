import Assessment from "../assessment";
import Marker from "../marker";
import Researcher from "../researches/Researcher";
import AssessmentResult from "../values/AssessmentResult";
import Paper from "../values/Paper";

declare class Assessor {
    constructor(researcher, options);
    setResearcher: (researcher) => this;
    getAvailableAssessments: () => Assessment;
    isApplicable: (assessment: Assessment, paper: Paper, researcher: Researcher) => boolean;
    hasMarker: (assessment: Assessment) => boolean;
    getSpecificMarker: () => Marker;
    getPaper: () => Paper;
    getMarker: (assessment: Assessment, paper: Paper, researcher: Researcher) => Marker;
    assess: (paper: Paper) => void;
    setHasMarkers: (hasMarkers: boolean) => void;
    hasMarkers: () => boolean;
    executeAssessment: (assessment: Assessment, paper: Paper, researcher: Researcher) => AssessmentResult;
    getValidResults: () => AssessmentResult;
    isValidResult: () => boolean;
    calculateOverallScore: () => number;
    addAssessment: (name: string, assessment: Assessment) => boolean;
    removeAssessment: (name: string) => boolean;
    getAssessment: (identifier: string) => Assessment;
    getApplicableAssessments: () => Assessment;
}

export default Assessor