function Tabs({children, buttons, ButtonContainer}) {
    // const ButtonContainer = buttonContainer;
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
        
    ); 
}

export default Tabs;