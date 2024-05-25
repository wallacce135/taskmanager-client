import { Grid, GridItem } from "@/shared/ui/grid";

/**
 * Страница авторизации
 * @returns JSX.Element
 */
export default function UiPage() {
    return  (
        <Grid columns={3} mobileColumns={2} gap={2}>
            <GridItem extraClasses={{ isWideColumn: true }}>
                <h1>PALETTE</h1>
            </GridItem>
            <GridItem>
                <div style={{ background: "#FF6411", height: "12rem", width: "100%", borderRadius: "2rem" }}></div>
                <h3 className={"bold"}>Orange Pinata / ACCENT - 01</h3>
                <p className={"p p1"}>#FF6411</p>
            </GridItem>

            <GridItem>
                <div style={{ background: "#1DB9CE", height: "12rem", width: "100%", borderRadius: "2rem" }}></div>
                <h3 className={"bold"}>Lago Blue / ACCENT - 02</h3>
                <p className={"p p1"}>#1DB9CE</p>
            </GridItem>
        </Grid>
    )
}