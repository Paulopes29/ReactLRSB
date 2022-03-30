import style from './Mail.module.css'
import { Button, Classes, ControlGroup, InputGroup, Intent, PopoverPosition } from '@blueprintjs/core';

function Mail(props) {
    return(
        <div>
                    <ControlGroup vertical style={{ width: 300, height: 300 }}>
                    <p>Du soleil jusque dans vos mails !</p>
                    <InputGroup placeholder="Nom" />
                    <InputGroup placeholder="Email" />
                    <Button className={Classes.LARGE} intent={Intent.PRIMARY} text={props.name} />
                    </ControlGroup>    
        </div>
    )
}
export default  Mail;