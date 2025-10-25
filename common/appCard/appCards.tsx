interface AppCardsProps {
    title?: string;
    resultAsNumber?: string;
}
export const AppCards = ({ title, resultAsNumber }: AppCardsProps) => {
    return (
        <div className="text-primary font-medium min-w-[181px] min-h-[110px] border-[0.7px] border-[#DFE5F9] rounded-xl ps-[1.25rem] flex flex-col bg-white">

            <div className="flex flex-col gap-[1.31rem]">

                <div className="flex items-center justify-between pt-4 ">
                    {title}
                </div>

                <div className="flex justify-between">
                    <p className="font-light text-right text-2xl ">{resultAsNumber}</p>
                </div>
            </div>
        </div>
    )
}


