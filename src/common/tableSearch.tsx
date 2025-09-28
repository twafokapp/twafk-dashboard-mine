import { Input } from "@/components/ui/input"

interface Tabsbutton {
    tabs?: React.ReactNode
}
export const Filter = ({ tabs }: Tabsbutton) => {
    return (
        <div className="flex text-end justify-between items-center ">
            <div className="flex">
                {tabs}
            </div>
            <Input />
        </div>
    )
}
