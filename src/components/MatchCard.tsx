import { memo } from "react";
import { Matches } from "../pages/TasksPage";
import { Button } from "./Button";
import { AvatarIcon, CrownIcon } from "./icons";

interface Props {
    match: Matches;
}

export const MatchCard = memo(({ match }: Props) => {
    return (
        <div className="flex justify-between bg-[#0B0E12] py-4 px-[36px] rounded-[4px] mb-4 last:mb-0">
            <div>
                <div className="flex items-center gap-[14px]">
                    <CrownIcon />
                    <p>{match.awayTeam.name}</p>
                </div>
                <div className="flex gap-[4px] flex-wrap items-center mt-[32px]">
                    {match.awayTeam.players.map((player: { kills: number; username: string }, index: number) => {
                        return (
                            <div key={index} className="grow bg-[#101318] flex items-center justify-between gap-6 px-6 py-2">
                                <div className="flex items-center gap-2">
                                    <AvatarIcon />
                                    <p>{player.username}</p>
                                </div>
                                <p> Убийств: <span className="ml-2">{player.kills}</span></p>
                            </div>
                        );
                    })}
                    <div className="w-full bg-[#101318] flex justify-between px-6 py-4">
                        <p>Points: <span className="ml-2">+{match.awayTeam.points}</span></p>
                        <p>Место: <span className="ml-2">{match.awayTeam.place}</span></p>
                        <p>Всего убийств: <span className="ml-2">{match.awayTeam.total_kills}</span></p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center">{match.homeScore} : {match.awayScore}</p>
                <Button classNames={`${match.status === 'Scheduled' ? 'bg-[#EB6402]' : match.status === 'Finished' ? 'bg-[#EB0237]' : ""}`}>
                    {match.status === 'Ongoing' ? "Live" : match.status === 'Scheduled' ? 'Match preparing' : "Finished"}
                </Button>
            </div>
            <div>
                <div className="flex items-center justify-end gap-[14px]">
                    <p>{match.homeTeam.name}</p>
                    <CrownIcon />
                </div>
                <div className="flex gap-[4px] flex-wrap items-center mt-[32px]">
                    {match.homeTeam.players.map((player: { kills: number; username: string }, index: number) => {
                        return (
                            <div key={index} className="grow bg-[#101318] flex items-center justify-between gap-6 px-6 py-2">
                                <div className="flex items-center gap-2">
                                    <AvatarIcon />
                                    <p>{player.username}</p>
                                </div>
                                <p> Убийств: <span className="ml-2">{player.kills}</span></p>
                            </div>
                        );
                    })}
                    <div className="w-full bg-[#101318] flex justify-between px-6 py-4">
                        <p>Points: <span className="ml-2">+{match.homeTeam.points}</span></p>
                        <p>Место: <span className="ml-2">{match.homeTeam.place}</span></p>
                        <p>Всего убийств: <span className="ml-2">{match.homeTeam.total_kills}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
});
