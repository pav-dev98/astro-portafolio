export default function Project({ name, version, description, link, features, className="" }: { name: string, version: string, description: string, link: string, features: string[], className?: string }) {
    return (
        <div className={"project " + className}>
            <div className="project-header">
                <h4>{name}</h4>
                <span>{version}</span>
            </div>
            <div className="project-body">
                <div className="editor">
                    <p className="line">/**</p>
                    {features.map((feature, index) => (
                        <p className="line">* {feature}</p>
                    ))}
                    <p className="line">*/</p>
                </div>
                <button onClick={() => {
                    // abrir en una nueva pestaña
                    window.open('https://github.com/pav-dev98/spot', '_blank');
                }}>see the project</button>
            </div>
        </div>
    );
}