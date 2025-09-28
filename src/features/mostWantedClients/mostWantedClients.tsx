import { MyTable } from "@/common/table/table.content";
import MOST_WANTED_CLIENTS_MOCK_DATA from "./MOST_WANTED_CLIENTS_MOCK_DATA.json";
import { UseClientColumns } from "./columns"
export const MostWantedClients = () => {
    const columns = UseClientColumns();
    return (
    <div>
        <MyTable data={MOST_WANTED_CLIENTS_MOCK_DATA as []} columns={columns as []} />
    </div>
)


}