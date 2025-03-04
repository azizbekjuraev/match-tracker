import { TestOne, TestTwo } from "../sections";
import { useMatches } from "../hooks/useMatches";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export interface Matches {
    awayScore: number,
    awayTeam: any,
    homeScore: number,
    homeTeam: any,
    status: string,
    time: string,
    title: string
}

export function TasksPage (){
    let {matches, loading, error, fetchMatches} = useMatches();
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TestOne matches={matches} loading={loading} error={error} onRetry={fetchMatches} />}/>
                <Route path="/test-two" element={<TestTwo matches={matches} loading={loading} error={error} onRetry={fetchMatches} />}/>
            </Routes>
        </Router>
    )
}