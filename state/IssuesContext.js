import { createContext } from "react";
import { issuesMock } from "../utils/mocks/issues-mock";

export const initialState = { issues: issuesMock, currentType: "All" };
export const IssuesContext = createContext();
