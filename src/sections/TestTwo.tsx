import { useNavigate } from "react-router-dom";
import { Button, MatchCard } from "../components";
import { Matches } from "../pages/TasksPage";
import { Fragment, useEffect, useState } from "react";

interface Props {
    matches?: Matches[];
    loading: boolean;
    error: string | null;
    onRetry: () => void;
}

export function TestTwo ({matches, loading, error, onRetry}: Props){
    let navigate = useNavigate();
    let [isHidden, setIsHidden] = useState(true);
    let [filteredMatches, setFilteredMatches] = useState(matches);

    let changeStatus = (e) => {
        let status: string = e.target.innerText;

        let statusMap: Record <string, string> = {
            "Live": "Ongoing",
            "Finished": "Finished",
            "Match preparing": "Scheduled"
        }

        setFilteredMatches(
            status === "Все статусы"
                ? matches 
                : matches?.filter((match)=> match.status === statusMap[status]) 
        )
        
        setIsHidden(true)
    }

    useEffect(() => {
        if (matches) setFilteredMatches(matches)
    }, [matches])

    return (
        <div className="p-[42px]">
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <h1 className="italic text-[32px]">Match Tracker</h1>
                    <div>
                        <button onClick={()=>setIsHidden(!isHidden)} className="text-[#B4B5B6] focus:outline-none font-medium p-4 text-center inline-flex items-center bg-[#0B0E12]" type="button">Все статусы <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        <div className={`z-10 bg-[#0B0E12] ${isHidden && 'hidden'} divide-y divide-gray-100 shadow-sm mt-2 absolute`}>
                            <ul className="py-2 text-gray-700 dark:text-gray-200">
                                <li onClick={(e)=>changeStatus(e)}>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Все статусы</a>
                                </li>
                                <li onClick={(e)=>changeStatus(e)}>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Live</a>
                                </li>
                                <li onClick={(e)=>changeStatus(e)}>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finished</a>
                                </li>
                                <li onClick={(e)=>changeStatus(e)}>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Match preparing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                <div className="flex gap-4 items-center">
                    {error && <p className="bg-[#0F1318] px-[24px] py-[7px] text-[18px] flex items-center gap-[10px]">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0123 11.6852V14.0185M14.0123 18.6852V18.6968M5.84556 23.3518H22.1789C22.5596 23.3492 22.9338 23.2534 23.269 23.0729C23.6042 22.8923 23.8901 22.6325 24.1018 22.3161C24.3135 21.9997 24.4446 21.6363 24.4836 21.2576C24.5226 20.8789 24.4683 20.4964 24.3256 20.1435L16.0422 5.85185C15.8404 5.48714 15.5446 5.18315 15.1856 4.97146C14.8266 4.75978 14.4174 4.64813 14.0006 4.64813C13.5838 4.64813 13.1746 4.75978 12.8155 4.97146C12.4565 5.18315 12.1607 5.48714 11.9589 5.85185L3.67556 20.1435C3.53549 20.4884 3.47995 20.8617 3.51357 21.2324C3.54719 21.603 3.66899 21.9603 3.86882 22.2743C4.06864 22.5883 4.34069 22.85 4.66224 23.0374C4.98379 23.2249 5.34552 23.3327 5.71723 23.3518" stroke="#EB0237" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {error}
                        </p>}
                    <Button size="md" classNames="bg-[#EB0237] flex items-center gap-[10px]" onClick={onRetry}>
                        Обновить
                        <svg id={`${loading && 'star'}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.0853 2.4375C7.89235 2.4375 3.62334 6.40576 3.2071 11.4653H2.16653C1.83732 11.4653 1.54065 11.6639 1.41527 11.9683C1.28988 12.2727 1.36057 12.6227 1.59427 12.8546L3.41406 14.6601C3.73084 14.9744 4.24181 14.9744 4.55859 14.6601L6.37838 12.8546C6.61208 12.6227 6.68277 12.2727 6.55738 11.9683C6.432 11.6639 6.13533 11.4653 5.80612 11.4653H4.83887C5.25023 7.31431 8.78003 4.0625 13.0853 4.0625C16.0856 4.0625 18.7119 5.64249 20.1667 8.00886C20.4017 8.39113 20.9021 8.51051 21.2844 8.2755C21.6667 8.04049 21.7861 7.54009 21.551 7.15782C19.8108 4.32713 16.6694 2.4375 13.0853 2.4375Z" fill="white"/>
                            <path opacity="0.5" d="M22.5779 11.3388C22.2614 11.0259 21.7521 11.0259 21.4356 11.3388L19.6088 13.1443C19.3745 13.376 19.3032 13.7262 19.4284 14.031C19.5536 14.3357 19.8505 14.5347 20.18 14.5347H21.154C20.741 18.6834 17.1989 21.9375 12.873 21.9375C9.85862 21.9375 7.22136 20.3562 5.76113 17.99C5.52547 17.6081 5.02486 17.4896 4.64299 17.7252C4.26112 17.9609 4.1426 18.4615 4.37826 18.8434C6.12525 21.6742 9.27774 23.5625 12.873 23.5625C18.0815 23.5625 22.3681 19.5967 22.7859 14.5347H23.8335C24.163 14.5347 24.4599 14.3357 24.5851 14.031C24.7103 13.7262 24.639 13.376 24.4047 13.1443L22.5779 11.3388Z" fill="white"/>
                        </svg>
                    </Button>
                </div>
                </div>
            </nav>
            <div className="mt-[32px]">
                {
                    filteredMatches?.map((match, index)=>{
                        return (
                            <Fragment key={index}>
                                <MatchCard match={match}/>
                            </Fragment>
                        )
                    })
                }
            </div>
            {!loading && (
                <div className="flex items-center justify-end mt-4 w-full">
                <Button onClick={() => navigate("/")}>{`< Test one`}</Button>
            </div>
            )}
        </div>
    )
}