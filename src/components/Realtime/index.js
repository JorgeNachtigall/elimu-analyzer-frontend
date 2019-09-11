import React, { useState, useEffect } from 'react';
import './styles.css';
import Fire from '../../config/Fire';
import InlineSVG from 'svg-inline-react';
import translator from 'scratch-code-translator';

export default function Realtime() {

    const [svg, setSvg] = useState('');
    const [trans, setTrans] = useState('');
    const [users, setUsers] = useState([]);
    const [state, setState] = useState(0);
    const [codeStates, setCodeStates] = useState([]);
    const [user, setUser] = useState('');
    let path = "classes/novoELIMU";
    let xml = [];

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        let classes = Fire.database.ref(path);

        let snapshot = await classes.once('value')
        let value = snapshot.val();

        for (let key in value) {
            let subVal = value[key];
            xml.push(key);
            /*
            for (let subKey in subVal) {
                xml.push(subVal[subKey]['xml']);
            }*/
        }

        console.log(xml);

        setUsers(xml);

        //renderBlocks();
    }

    async function renderBlocks(id) {

        //let xmlData = '<xml><variables><variable type="" id="`jEk@4|i[#Fk?(8x)AV.-my variable" islocal="false" iscloud="false">minha variável</variable></variables><block type="operator_equals" id="2psYQAdSMjzf6#SD4:)j" x="159" y="432"><value name="OPERAND1"><shadow type="text" id="3*Z?vOpjZW:0w=jt9/{+"><field name="TEXT"></field></shadow><block type="operator_divide" id="Ri%cU[$SXFwv:n%FBsQk"><value name="NUM1"><shadow type="math_number" id="0({NE}8kD5![wySb`||K"><field name="NUM">20</field></shadow></value><value name="NUM2"><shadow type="math_number" id="Fww`Sb!Xdi(h31$ip@$d"><field name="NUM">30</field></shadow></value></block></value><value name="OPERAND2"><shadow type="text" id="hwl-0p7_wYf+2s6A|[KX"><field name="TEXT">50</field></shadow></value></block></xml>';

        let classes = Fire.database.ref(path + '/' + user + '/' + id);

        let snapshot = await classes.once('value');
        let value = snapshot.val();

        console.log(value);

        let xmlData = value['xml'];

        let code = translator.translate(xmlData);

        let doc = window.scratchblocks.parse(code, {
            languages: ['en']
        });

        let docView = window.scratchblocks.newView(doc, {
            style: 'scratch3'
        });

        let image = docView.render();

        image.style.transform = 'scale(0.675)';
        image.style.transformOrigin = '0 0';

        let serializer = new XMLSerializer();

        let imageStr = serializer.serializeToString(image);
        console.log(trans);
        setSvg(imageStr);
        setState(2);
    }

    function handleClick(id) {
        if (state === 0)
            getStates(id);
        else if (state === 1)
            renderBlocks(id);

    }

    async function getStates(user) {
        xml = [];

        setUser(user);

        let classes = Fire.database.ref(path + '/' + user);

        let snapshot = await classes.once('value')
        let value = snapshot.val();

        for (let key in value) {
            let subVal = value[key];
            xml.push(key);
        }

        setCodeStates(xml);
        setState(1);
    }

    function goBack() {
        setState(1);
    }

    if (state === 0) {
        return (
            <div class="ui cards">
                {users.map(user => (
                    <div class="ui card blue" key={user}>
                        <div class="content">
                            <img src="/images/avatar/large/steve.jpg" class="ui mini right floated image" />
                            <div class="header">{user}</div>
                        </div>
                        <div class="extra content">
                            <div class="ui two buttons" onClick={() => handleClick(user)}>
                                <button class="ui green button">Ver</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else if (state === 1) {
        return (
            <div class="ui cards">
                {codeStates.map(user => (
                    <div class="ui card blue" key={user}>
                        <div class="content">
                            <img src="/images/avatar/large/steve.jpg" class="ui mini right floated image" />
                            <div class="header">{user}</div>
                        </div>
                        <div class="extra content">
                            <div class="ui two buttons" onClick={() => handleClick(user)}>
                                <button class="ui green button">Ver</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else if (state === 2) {
        return (
            <div>
                <div class="content">
                    <InlineSVG src={svg} />
                </div>
                <div class="ui two buttons" onClick={() => goBack()}>
                    <button class="ui red button">Voltar</button>
                </div>
            </div>
        );
    }
}