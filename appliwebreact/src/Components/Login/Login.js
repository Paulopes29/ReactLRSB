import { Button, Classes,ControlGroup,InputGroup,Intent } from '@blueprintjs/core';

//Formulaire de Login avec blueprint

const LoginPage = () => {
    return(
        <ControlGroup vertical style={{width: 300}}>
            <InputGroup className={Classes.LARGE}  placeholder="Username" />
            <InputGroup className={Classes.LARGE}  type='password' placeholder="Password" />
            <Button className={Classes.LARGE} intent={Intent.PRIMARY} text="Login" />
        </ControlGroup>
    )
}
export default  LoginPage;
