import { MyTable } from "@/common/table/table.content"
import NEW_CLIENTS_MOCK_DATA from "./NEW_CLIENTS_MOCK_DATA.json"
import { UseClientColumns } from "./columns";

export const NewClients = () => {
    const columns = UseClientColumns();
    return (
        <div>
            <MyTable data={NEW_CLIENTS_MOCK_DATA as []} columns={columns as []} />
        </div>
    )
}

