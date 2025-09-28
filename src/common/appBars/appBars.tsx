
interface AppBarsProps {
    title?: string;
    data?: string;
}
export const AppBars = ({ title, data }: AppBarsProps) => {
    return (
        <div className=" flex justify-between rounded-[9px] shadow-bar bg-white p-2.5 w-full">
            <span className="text-base font-bold ">{title}</span>
            <span className="font-light text-base ">{data}</span>
        </div>
    )
}

