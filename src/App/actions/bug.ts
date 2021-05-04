import IBug from "../reducers/bug/bug";

const ISSUE_BUG = "ISSUE_BUG";
const RESOLVE_BUG = "RESOLVE_BUG";
const DELETE_BUG = "DELETE_BUG";

const issueBug = (bug: IBug) => ({
    type: ISSUE_BUG,
    payload: {
        issuerName: bug.issuerName,
        timestamp: bug.timestamp,
        title: bug.title,
        description: bug.description,
        resolved: bug.resolved
    }
});

const deleteBug = (bugId: number) => ({
    type: DELETE_BUG,
    payload: {
        id: bugId
    }
});

const bugTypes = {
    ISSUE_BUG,
    RESOLVE_BUG,
    DELETE_BUG
};

const bugActions = {
    issueBug,
    deleteBug
}

export { bugTypes, bugActions };