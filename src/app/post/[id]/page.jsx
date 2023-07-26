export default function Post({params}) {
    const {id} = params;

    return (
        <div className="page-layout">
            <h1>{`Esto es un post ${id}`}</h1>
        </div>
    )
}