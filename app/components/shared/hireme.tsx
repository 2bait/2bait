type HireMeProps = {
    caption: string;
    description: string;
    actionMessage: string;
    children: React.ReactNode;
};

export default function HireMe({ caption, description, actionMessage, children }: HireMeProps) {
    return (
        <div className="hire-banner">
            <div className="hire-icon">
                {children}
            </div>
            <div className="hire-content">
                <h3>{caption}</h3>
                <p>{description}</p>
            </div>
            <a href="#contact" className="hire-cta">{actionMessage}</a>
        </div>
    );
};
