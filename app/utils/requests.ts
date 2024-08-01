//----------------------------Estrutura do cadastro admin---------------------------------------DONE
export const cadastroAdmin = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GestorCreat>
         <user:userCreat>
            <user:password>senha123</user:password>
            <user:nome>Ruben</user:nome>
            <user:sobrenome>Adm</user:sobrenome>
            <user:genero>Masculino</user:genero>
            <user:BI>123456789</user:BI>
            <user:email>ruben01@example.com</user:email>
            <user:dataNascimento>1990-01-01T00:00:00</user:dataNascimento>
            <user:telefone>+5511999999999</user:telefone>
            <user:foto></user:foto>
            <user:tipo>2</user:tipo>
         </user:userCreat>
         <user:idEstacao>1</user:idEstacao>
      </user:GestorCreat>
   </soapenv:Body>
</soapenv:Envelope>`

//----------------------------Estrutura do login---------------------------------------DONE
export const loginUser = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GestorLoginRequest>
        <user:password>senha123</user:password>
        <user:email>ruben@example.com</user:email>
      </user:GestorLoginRequest>
   </soapenv:Body>
</soapenv:Envelope>`

//----------------------------Estrutura para pegar todas estações ------------------------
export const pegarTodasEstacoes = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:AllEstacoesRequest>
      </user:AllEstacoesRequest>
   </soapenv:Body>
</soapenv:Envelope>`

//----------------------------Estrutura para pegar pegar detalhes de um estação ---------------
export const pgarDetalhesEstacoes = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:GetStationDetailsRequest>
         <stat:Header>
            <stat:AuthToken></stat:AuthToken>
         </stat:Header>
         <stat:Body>
            <stat:id>1</stat:id>
         </stat:Body>
      </stat:GetStationDetailsRequest>
   </soapenv:Body>
</soapenv:Envelope>`

//----------------------------Estrutura para pegar pegar todas docas de uma estação -------------------
export const pegarTodasDocas = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:GetAllDocaRequest>
         <stat:idEstacao>1</stat:idEstacao>
      </stat:GetAllDocaRequest>
   </soapenv:Body>
</soapenv:Envelope>`
//----------------------------Estrutura para adicionar doca em uma estação --------------
export const addDoca = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:AddDocaRequest>
         <stat:idEstacao>1</stat:idEstacao>
      </stat:AddDocaRequest>
   </soapenv:Body>
</soapenv:Envelope>`
//----------------------------REQUEST: ADD RESERVA DE UMA DOCA  --------------
export const addReservaDoca = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:AddReservaRequest>
         <stat:idUser>2</stat:idUser>
         <stat:idEstacao>1</stat:idEstacao>
         <stat:idDoca>2</stat:idDoca>
      </stat:AddReservaRequest>
   </soapenv:Body>
</soapenv:Envelope>`
//----------------------------REQUEST: PEGAR TODAS RESERVAS DE UMA ESTAÇÃO  --------------
export const pegarTodasReservas = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:GetAllReservaRequest>
         <stat:idEstacao>2</stat:idEstacao>
      </stat:GetAllReservaRequest>
   </soapenv:Body>
</soapenv:Envelope>`

//----------------------------REQUEST: PEGAR TODOS OS USERS CICLISTAS  --------------
export const pegarTodosCilclistas = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GetAllCiclistasRequest>
      </user:GetAllCiclistasRequest>
   </soapenv:Body>
</soapenv:Envelope>`
//----------------------------REQUEST: PEGAR TODOS OS USUÁRIOS ADMINISTRATIVOS  --------------
export const pegarTodosAdmins = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GetAllAdmRequest>
      </user:GetAllAdmRequest>
   </soapenv:Body>
</soapenv:Envelope>`

//----------------------------REQUEST: ADD UMA ESTAÇÃO UMA ESTAÇÃO NO BIKE SHARED --------------
export const addEstacao = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:AddEstacaoBikeSharedRequest>
         <user:url>http://localhost:8083/wsStation/station1.wsdl</user:url>
      </user:AddEstacaoBikeSharedRequest>
   </soapenv:Body>
</soapenv:Envelope>`