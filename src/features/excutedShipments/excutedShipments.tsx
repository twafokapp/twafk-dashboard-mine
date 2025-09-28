import { MyTable } from "@/common/table/table.content"
import EXCUTED_SHIPMENTS_MOCK_DATA from "./EXCUTED_SHIPMENTS_MOCK_DATA.json"
import { UseClientColumns } from "./columns"
export const ExcutedShipments = () => {
    const columns = UseClientColumns()
    return (
        <div>
            <MyTable data={EXCUTED_SHIPMENTS_MOCK_DATA as []} columns={columns as []} />
        </div>
    )
}

