const DASHBOARD_TYPES = [
    {label: "Cake dashboard", value: '0'},
    {label: "Candles dashboard", value: '1'},
    {label: "Graph dashboard", value: '2'}
]


export default function DashboardType({params}) {
    const {id} = params;
    const type = DASHBOARD_TYPES.filter((element) => element.value === id)[0];

    return (
        <div>
            <h1>{`${type?.label}`}</h1>
        </div>
    )
}