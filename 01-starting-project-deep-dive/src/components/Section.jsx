function Section({ title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section; // Exporting the Section component to be used in other parts of the application.