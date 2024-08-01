//----------------------------Estrutura do cadastro admin---------------------------------------DONE
export const cadastroAdmin= `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:UserClientResponse xmlns:ns2="http://user.soap.xml">
            <ns2:id>52</ns2:id>
            <ns2:idUser>1253</ns2:idUser>
            <ns2:idEstacao>1</ns2:idEstacao>
            <ns2:dadosUser>
                <ns2:id>1253</ns2:id>
                <ns2:password>55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251</ns2:password>
                <ns2:nome>Ruben</ns2:nome>
                <ns2:sobrenome>Silva</ns2:sobrenome>
                <ns2:genero>Masculino</ns2:genero>
                <ns2:BI>123456789</ns2:BI>
                <ns2:email>ruben@example.com</ns2:email>
                <ns2:telefone>+5511999999999</ns2:telefone>
                <ns2:foto/>
                <ns2:tipo>3</ns2:tipo>
                <ns2:token>eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydWJlbkBleGFtcGxlLmNvbSIsImlzcyI6InNlcnZlciIsImV4cCI6MTcyMjAxNTYzOX0.gX6WZVtXM8MYnywLE-P0przD4r6aGmz_8z3pnQrkFSQ</ns2:token>
            </ns2:dadosUser>
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Login efectuado com sucesso!!</ns2:mensagem>
        </ns2:UserClientResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

//----------------------------Estrutura do login---------------------------------------DONE
export const loginUser = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:UserGestorResponse xmlns:ns2="http://user.soap.xml">
            <ns2:id>0</ns2:id>
            <ns2:idUser>0</ns2:idUser>
            <ns2:idEstacao>0</ns2:idEstacao>
            <ns2:erro>true</ns2:erro>
            <ns2:mensagem>Erro ao adicionar o usuário.could not execute statement [Duplicate entry 'ruben01@example.com' for key 'users.UK_6dotkott2kjsp8vw4d0m25fb7'] [insert into users (bi,data_created,data_nascimento,data_updated,email,foto,genero,nome,password,sobrenome,telefone,tipo,id) values (?,?,?,?,?,?,?,?,?,?,?,?,?)]; SQL [insert into users (bi,data_created,data_nascimento,data_updated,email,foto,genero,nome,password,sobrenome,telefone,tipo,id) values (?,?,?,?,?,?,?,?,?,?,?,?,?)]; constraint [users.UK_6dotkott2kjsp8vw4d0m25fb7]</ns2:mensagem>
        </ns2:UserGestorResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

//----------------------------Estrutura para pegar todas estações ------------------------
export const pegarTodasEstacoes = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:AllDocasResponse xmlns:ns2="http://station.soap.xml">
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Sucesso as carregar as estações!!</ns2:mensagem>
            <ns2:todasEstacoes>
                <ns2:id>1</ns2:id>
                <ns2:nome>Estacao Central</ns2:nome>
                <ns2:premio>0.0</ns2:premio>
                <ns2:latitude>0.0</ns2:latitude>
                <ns2:longitude>0.0</ns2:longitude>
                <ns2:activeState>false</ns2:activeState>
                <ns2:qtdDocasTotais>0</ns2:qtdDocasTotais>
                <ns2:qtdDocasLivres>0</ns2:qtdDocasLivres>
            </ns2:todasEstacoes>
            <ns2:todasEstacoes>
                <ns2:id>2</ns2:id>
                <ns2:nome>Camama Station</ns2:nome>
                <ns2:premio>100</ns2:premio>
                <ns2:latitude>0.0</ns2:latitude>
                <ns2:longitude>0.0</ns2:longitude>
                <ns2:activeState>true</ns2:activeState>
                <ns2:qtdDocasTotais>5</ns2:qtdDocasTotais>
                <ns2:qtdDocasLivres>2</ns2:qtdDocasLivres>
            </ns2:todasEstacoes>
        </ns2:AllDocasResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

//----------------------------Estrutura para pegar detalhes de um estação ---------------
export const pegarDetalhesEstacoes = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetStationDetailsResponse xmlns:ns2="http://station.soap.xml">
            <ns2:estado>true</ns2:estado>
            <ns2:mensagem>Estação encontrada com sucesso!!!</ns2:mensagem>
            <ns2:dadosEstacao>
                <ns2:id>1</ns2:id>
                <ns2:nome>Estação Central</ns2:nome>
                <ns2:premio>30.0</ns2:premio>
                <ns2:latitude>50.5</ns2:latitude>
                <ns2:longitude>50.5</ns2:longitude>
                <ns2:activeState>true</ns2:activeState>
                <ns2:qtdDocasTotais>5</ns2:qtdDocasTotais>
                <ns2:qtdDocasLivres>5</ns2:qtdDocasLivres>
            </ns2:dadosEstacao>
        </ns2:GetStationDetailsResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

//----------------------------Estrutura para pegar todas docas de uma estação -------------------
export const pegarTodasDocas = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:AllDocasResponse xmlns:ns2="http://station.soap.xml">
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Nova doca adiconada com sucesso!</ns2:mensagem>
            <ns2:TodasDocas>
                <ns2:id>1</ns2:id>
                <ns2:reference>DCE01N001</ns2:reference>
                <ns2:aberta>true</ns2:aberta>
            </ns2:TodasDocas>
            <ns2:TodasDocas>
                <ns2:id>2</ns2:id>
                <ns2:reference>DCE01N011</ns2:reference>
                <ns2:aberta>true</ns2:aberta>
            </ns2:TodasDocas>
            <ns2:TodasDocas>
                <ns2:id>3</ns2:id>
                <ns2:reference>DCE01N021</ns2:reference>
                <ns2:aberta>true</ns2:aberta>
            </ns2:TodasDocas>
            <ns2:TodasDocas>
                <ns2:id>4</ns2:id>
                <ns2:reference>DCE01N031</ns2:reference>
                <ns2:aberta>true</ns2:aberta>
            </ns2:TodasDocas>
            <ns2:TodasDocas>
                <ns2:id>52</ns2:id>
                <ns2:reference>DCE01N041</ns2:reference>
                <ns2:aberta>true</ns2:aberta>
            </ns2:TodasDocas>
        </ns2:AllDocasResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
//----------------------------Estrutura para adicionar doca em uma estação --------------
export const addDoca = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:AllDocasResponse xmlns:ns2="http://station.soap.xml">
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Nova doca adiconada com sucesso!</ns2:mensagem>
            <ns2:dadosDoca>
                <ns2:id>102</ns2:id>
                <ns2:reference>DCE01N051</ns2:reference>
                <ns2:aberta>true</ns2:aberta>
            </ns2:dadosDoca>
        </ns2:AllDocasResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

//----------------------------RESPONSE: ADD RESERVA DE UMA DOCA --------------
export const addReservaDoca = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:AddReservaResponse xmlns:ns2="http://station.soap.xml">
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Reserva enviada com sucesso!!</ns2:mensagem>
            <ns2:id>52</ns2:id>
            <ns2:idUser>2</ns2:idUser>
            <ns2:idEstacao>1</ns2:idEstacao>
            <ns2:idDoca>3</ns2:idDoca>
        </ns2:AddReservaResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
//----------------------------RESPONSE: PEGAR TODAS RESERVAS DE UMA ESTAÇÃO "QUANDO NÃO TEM RESERVAS" --------------
export const pegarTodasReservas = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetAllReservaResponse xmlns:ns2="http://station.soap.xml">
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Sucesso!! Nenhuma reserva registrada.</ns2:mensagem>
        </ns2:GetAllReservaResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
//----------------------------RESPONSE: PEGAR TODAS RESERVAS DE UMA ESTAÇÃO "QUANDO TEM RESERVAS" --------------
export const pegarTodasReservasSeTem = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetAllReservaResponse xmlns:ns2="http://station.soap.xml">
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Sucesso ao pegar as reservas de uma estação</ns2:mensagem>
            <ns2:TodasReservas>
                <ns2:erro>false</ns2:erro>
                <ns2:id>52</ns2:id>
                <ns2:idUser>2</ns2:idUser>
                <ns2:idEstacao>1</ns2:idEstacao>
                <ns2:idDoca>3</ns2:idDoca>
            </ns2:TodasReservas>
            <ns2:TodasReservas>
                <ns2:erro>false</ns2:erro>
                <ns2:id>52</ns2:id>
                <ns2:idUser>2</ns2:idUser>
                <ns2:idEstacao>1</ns2:idEstacao>
                <ns2:idDoca>3</ns2:idDoca>
            </ns2:TodasReservas>
            <ns2:TodasReservas>
                <ns2:erro>false</ns2:erro>
                <ns2:id>52</ns2:id>
                <ns2:idUser>2</ns2:idUser>
                <ns2:idEstacao>1</ns2:idEstacao>
                <ns2:idDoca>3</ns2:idDoca>
            </ns2:TodasReservas>
        </ns2:GetAllReservaResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

//----------------------------RESPONSE: PEGAR TODOS OS USERS CICLISTAS --------------
export const pegarTodosCiclistas = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetAllCiclistasResponse xmlns:ns2="http://user.soap.xml">
            <ns2:estado>true</ns2:estado>
            <ns2:mensagem>Sucesso ao pegar todos usuários ciclistas</ns2:mensagem>
            <ns2:ciclistas>
                <ns2:id>903</ns2:id>
                <ns2:idUser>2204</ns2:idUser>
                <ns2:saldo>10.0</ns2:saldo>
                <ns2:dadosUser>
                    <ns2:id>2204</ns2:id>
                    <ns2:nome>Fennandes</ns2:nome>
                    <ns2:sobrenome>ciclista</ns2:sobrenome>
                    <ns2:genero>Masculino</ns2:genero>
                    <ns2:BI>123456789</ns2:BI>
                    <ns2:email>c1@example.com</ns2:email>
                    <ns2:telefone>+5511999999999</ns2:telefone>
                    <ns2:foto/>
                    <ns2:tipo>1</ns2:tipo>
                </ns2:dadosUser>
                <ns2:isDevedor>false</ns2:isDevedor>
                <ns2:erro>false</ns2:erro>
            </ns2:ciclistas>
            <ns2:ciclistas>
                <ns2:id>903</ns2:id>
                <ns2:idUser>2204</ns2:idUser>
                <ns2:saldo>10.0</ns2:saldo>
                <ns2:dadosUser>
                    <ns2:id>2204</ns2:id>
                    <ns2:nome>Fennandes</ns2:nome>
                    <ns2:sobrenome>ciclista</ns2:sobrenome>
                    <ns2:genero>Masculino</ns2:genero>
                    <ns2:BI>123456789</ns2:BI>
                    <ns2:email>c1@example.com</ns2:email>
                    <ns2:telefone>+5511999999999</ns2:telefone>
                    <ns2:foto/>
                    <ns2:tipo>1</ns2:tipo>
                </ns2:dadosUser>
                <ns2:isDevedor>false</ns2:isDevedor>
                <ns2:erro>false</ns2:erro>
            </ns2:ciclistas>
        </ns2:GetAllCiclistasResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

//----------------------------RESPONSE: PEGAR TODOS OS USUÁRIOS ADMINISTRATIVOS --------------
export const pegarTodosAdmins = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetAllAdmResponse xmlns:ns2="http://user.soap.xml">
            <ns2:estado>true</ns2:estado>
            <ns2:mensagem>Sucesso ao pegar todos usuários administrativos</ns2:mensagem>
            <ns2:administradores>
                <ns2:id>403</ns2:id>
                <ns2:idUser>2207</ns2:idUser>
                <ns2:saldo>0.0</ns2:saldo>
                <ns2:dadosUser>
                    <ns2:id>2207</ns2:id>
                    <ns2:nome>Ruben</ns2:nome>
                    <ns2:sobrenome>Adm</ns2:sobrenome>
                    <ns2:genero>Masculino</ns2:genero>
                    <ns2:BI>123456789</ns2:BI>
                    <ns2:email>a1@example.com</ns2:email>
                    <ns2:telefone>+5511999999999</ns2:telefone>
                    <ns2:foto/>
                    <ns2:tipo>2</ns2:tipo>
                </ns2:dadosUser>
                <ns2:isDevedor>false</ns2:isDevedor>
                <ns2:erro>false</ns2:erro>
            </ns2:administradores>
            <ns2:administradores>
                <ns2:id>403</ns2:id>
                <ns2:idUser>2207</ns2:idUser>
                <ns2:saldo>0.0</ns2:saldo>
                <ns2:dadosUser>
                    <ns2:id>2207</ns2:id>
                    <ns2:nome>Ruben</ns2:nome>
                    <ns2:sobrenome>Adm</ns2:sobrenome>
                    <ns2:genero>Masculino</ns2:genero>
                    <ns2:BI>123456789</ns2:BI>
                    <ns2:email>a1@example.com</ns2:email>
                    <ns2:telefone>+5511999999999</ns2:telefone>
                    <ns2:foto/>
                    <ns2:tipo>2</ns2:tipo>
                </ns2:dadosUser>
                <ns2:isDevedor>false</ns2:isDevedor>
                <ns2:erro>false</ns2:erro>
            </ns2:administradores>
        </ns2:GetAllAdmResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

export const addEstacao = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:AllDocasResponse xmlns:ns2="http://station.soap.xml">
            <ns2:erro>false</ns2:erro>
            <ns2:mensagem>Estação adiconada com sucesso.</ns2:mensagem>
        </ns2:AllDocasResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`