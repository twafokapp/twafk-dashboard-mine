import { AppButton } from "@/common/appButton/appButton";
import { AppChip } from "@/common/appChip/appChips";
import type { JSX } from "react";
import { useTranslation } from "react-i18next";

interface GetChipValuePorps {
    state?: string | undefined
}

export const GetChipValue = ({ state }: GetChipValuePorps): JSX.Element => {
    const { t } = useTranslation()
    const chips: Record<string, JSX.Element> = {
        under_revising: <AppChip color="warning" chipText={t("chips.under_revising")} />,
        accepted: <AppChip color="success" chipText={t("chips.accepted")} />,
        return: <AppChip color="primary" chipText={t("chips.return")} />,
        refused: <AppChip color="error" chipText={t("chips.refused")} />,
        accepted_and_refused: <div className="flex justify-center m-auto gap-3">
            <AppButton color="secondary" buttonText={t("buttons.Accept")} width="short" />
            <AppButton color="error" buttonText={t("buttons.refuse")} width="short" />
        </div>,
    };

    return chips[state || ""] ?? "No Chip";
};
