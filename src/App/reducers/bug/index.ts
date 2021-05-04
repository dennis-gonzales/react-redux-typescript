import IBug, { IBugAction } from "./bug";
import { bugTypes } from '../../actions/bug';

let lastId: number = 0;

const bugReducer = (state: IBug[] = [], action: IBugAction<IBug>): IBug[] => {
    switch (action.type) {
        case bugTypes.ISSUE_BUG:
            return [
                ...state,
                {
                    id: lastId++,
                    issuerName: action.payload.issuerName || "No name",
                    timestamp: action.payload.timestamp || "No date",
                    title: action.payload.title || "Untitled",
                    description: action.payload.description || "No description",
                    resolved: action.payload.resolved || false
                }
            ];

        case bugTypes.DELETE_BUG:
            return state.filter((bug) => bug.id !== action.payload.id);

        case bugTypes.RESOLVE_BUG:
            return state.map((bug) => bug.id === action.payload.id
                ? { ...bug, resolved: true }
                : bug
            );

        default:
            return state;
    }
}

export default bugReducer;