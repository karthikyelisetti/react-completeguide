export default function Button({children, mode, Icon}) {
 // Todo: Build this component!
 
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
    return (
        <>
            <span className="button-icon">{Icon}</span>
            <span className={mode ? mode : "filled-button"}>{children}</span>
        </>
    );
}