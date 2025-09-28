import { MyTable } from "@/common/table/table.content"
import ORDERED_PRODUCTS_MOCK_DATA from "./ORDERD_PRODUCTS_MOCK_DATA.json";
import { UseClientColumns } from "./columns";
export const OrderedProducts = () => {
    const columns = UseClientColumns();
    return (
        <div>
            <MyTable data={ORDERED_PRODUCTS_MOCK_DATA as []} columns={columns as []} />
        </div>
    )
}
