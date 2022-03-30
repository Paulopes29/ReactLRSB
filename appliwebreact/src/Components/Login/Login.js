import { Button, Classes,ControlGroup,InputGroup,Intent } from '@blueprintjs/core';

//Formulaire de Login

const LoginPage = () => {
    return(
        <ControlGroup vertical style={{width: 300}}>
            <InputGroup className={Classes.LARGE}  placeholder="Username" />
            <InputGroup className={Classes.LARGE}  placeholder="Password" />
            <Button className={Classes.LARGE} intent={Intent.PRIMARY} text="Login" />
        </ControlGroup>
    )
}
export default  LoginPage;