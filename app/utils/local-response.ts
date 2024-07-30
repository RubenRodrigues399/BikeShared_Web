export const userLogin = `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<SOAP-ENV:Header/>
<SOAP-ENV:Body>
<ns2:UserResponse xmlns:ns2="http://user.soap.xml">
    <ns2:estado>true</ns2:estado>
    <ns2:mensagem>Sessao iniciada com sucesso!</ns2:mensagem>
    <ns2:id>352</ns2:id>
    <ns2:ciclistaId>0</ns2:ciclistaId>
    <ns2:email>fake@email.fk</ns2:email>
    <ns2:password>1F25ADA76F7DE2A1FE2D65DE4ECC5A74A64658BF479A370FA6159D83E9B8CB0E</ns2:password>
    <ns2:nome>User</ns2:nome>
    <ns2:sobrenome>Fake</ns2:sobrenome>
    <ns2:genero>g</ns2:genero>
    <ns2:telefone>92100000000</ns2:telefone>
    <ns2:foto>?</ns2:foto>
    <ns2:token>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzZXJ2ZXIiLCJzdWIiOiJmYWtlQGVtYWlsLmZrIiwiZXhwIjoxNzE4MDU5MTc4fQ.LXty7DOTeEj9lZQQM_Cl0VqKHbqO4xoSjkTGO35_tgM</ns2:token>
</ns2:UserResponse>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

export const allStations = `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<SOAP-ENV:Header/>
<SOAP-ENV:Body>
<ns2:AllStationResponse xmlns:ns2="http://station.soap.xml">
<ns2:estado>true</ns2:estado>
<ns2:mensagem>Estações encontradas com sucesso!</ns2:mensagem>
<ns2:stationItem>
<ns2:id>102</ns2:id>
<ns2:name>CXX_station1</ns2:name>
<ns2:bonus>50</ns2:bonus>
<ns2:Docks>16</ns2:Docks>
<ns2:DocksDisp>12</ns2:DocksDisp>
<ns2:localName>Fortaleza de Luanda (São Miguel)</ns2:localName>
<ns2:latitude>-8.83807</ns2:latitude>
<ns2:longitude>13.2319</ns2:longitude>
</ns2:stationItem>
<ns2:stationItem>
<ns2:id>104</ns2:id>
<ns2:name>CXX_station2</ns2:name>
<ns2:bonus>100</ns2:bonus>
<ns2:Docks>16</ns2:Docks>
<ns2:DocksDisp>12</ns2:DocksDisp>
<ns2:localName>Presidência da República</ns2:localName>
<ns2:latitude>-8.82722</ns2:latitude>
<ns2:longitude>13.2314</ns2:longitude>
</ns2:stationItem>
<ns2:stationItem>
<ns2:id>105</ns2:id>
<ns2:name>CXX_station3</ns2:name>
<ns2:bonus>30</ns2:bonus>
<ns2:Docks>16</ns2:Docks>
<ns2:DocksDisp>12</ns2:DocksDisp>
<ns2:localName>Palácio do Governo</ns2:localName>
<ns2:latitude>-8.83118</ns2:latitude>
<ns2:longitude>13.2355</ns2:longitude>
</ns2:stationItem>
<ns2:stationItem>
<ns2:id>107</ns2:id>
<ns2:name>CXX_station4</ns2:name>
<ns2:bonus>40</ns2:bonus>
<ns2:Docks>16</ns2:Docks>
<ns2:DocksDisp>12</ns2:DocksDisp>
<ns2:localName>Palácio da Justiça</ns2:localName>
<ns2:latitude>-8.83889</ns2:latitude>
<ns2:longitude>13.2293</ns2:longitude>
</ns2:stationItem>
</ns2:AllStationResponse>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

export const station = `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetStationDetailsResponse xmlns:ns2="http://station.soap.xml">
            <ns2:estado>true</ns2:estado>
            <ns2:mensagem>Station encontrada com sucesso!!!</ns2:mensagem>
            <ns2:id>1</ns2:id>
            <ns2:name>CXX_station3</ns2:name>
            <ns2:bonus>30</ns2:bonus>
            <ns2:localName>Palácio do Governo</ns2:localName>
            <ns2:pais>Angola</ns2:pais>
            <ns2:provincia>Luanda Province</ns2:provincia>
            <ns2:municipio>Luanda</ns2:municipio>
            <ns2:distrito>Maianga Urban District</ns2:distrito>
            <ns2:avenida>Rua de Doutor L. de Vasconselhos</ns2:avenida>
            <ns2:latitude>-8.83118</ns2:latitude>
            <ns2:longitude>13.2355</ns2:longitude>
            <ns2:dockItem>
                <ns2:idDock>1</ns2:idDock>
                <ns2:reference>ST3_D1</ns2:reference>
                <ns2:state>1</ns2:state>
            </ns2:dockItem>
            <ns2:dockItem>
                <ns2:idDock>2</ns2:idDock>
                <ns2:reference>ST3_D2</ns2:reference>
                <ns2:state>1</ns2:state>
            </ns2:dockItem>
        </ns2:GetStationDetailsResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

export const allUsersAdmins = `
   <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:UserListResponse xmlns:ns2="http://user.soap.xml">
            <ns2:estado>true</ns2:estado>
            <ns2:mensagem>User encontrado com sucesso!</ns2:mensagem>
            <ns2:user>
                <ns2:id>1</ns2:id>
                <ns2:email>basa@gmail.ao.co</ns2:email>
                <ns2:password>A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3</ns2:password>
                <ns2:nome>Benvindo</ns2:nome>
                <ns2:sobrenome>Alves</ns2:sobrenome>
                <ns2:genero>F</ns2:genero>
                <ns2:telefone>934664175</ns2:telefone>
                <ns2:foto/>
            </ns2:user>
            <ns2:user>
                <ns2:id>3</ns2:id>
                <ns2:email>manuelds@outlook.pt</ns2:email>
                <ns2:password>FD83126A7B9E067B62ADF59835A50E46E9FCD934FE287B6AF33DF714F3D87750</ns2:password>
                <ns2:nome>Manuel</ns2:nome>
                <ns2:sobrenome>Santos</ns2:sobrenome>
                <ns2:genero>m</ns2:genero>
                <ns2:telefone>923146504</ns2:telefone>
                <ns2:foto/>
            </ns2:user>
            <ns2:user>
                <ns2:id>56</ns2:id>
                <ns2:email>teste@gmail.com</ns2:email>
                <ns2:password>03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4</ns2:password>
                <ns2:nome>Terceiro</ns2:nome>
                <ns2:sobrenome>Teste</ns2:sobrenome>
                <ns2:genero>?</ns2:genero>
                <ns2:telefone>?</ns2:telefone>
                <ns2:foto>file:///data/user/0/com.bikeshared_/cache/rn_image_picker_lib_temp_4cca1290-b1b2-4e7c-bab4-3653ef314ee3.jpg</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>57</ns2:id>
                <ns2:email>manuel1ds@outlook.pt</ns2:email>
                <ns2:password>FD83126A7B9E067B62ADF59835A50E46E9FCD934FE287B6AF33DF714F3D87750</ns2:password>
                <ns2:nome>MFSG</ns2:nome>
                <ns2:sobrenome>Sans</ns2:sobrenome>
                <ns2:genero>m</ns2:genero>
                <ns2:telefone>923146504</ns2:telefone>
                <ns2:foto/>
            </ns2:user>
            <ns2:user>
                <ns2:id>102</ns2:id>
                <ns2:email>m@gmail.com</ns2:email>
                <ns2:password>A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3</ns2:password>
                <ns2:nome>Teste</ns2:nome>
                <ns2:sobrenome>Milenar</ns2:sobrenome>
                <ns2:genero>?</ns2:genero>
                <ns2:telefone>?</ns2:telefone>
                <ns2:foto>undefined</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>152</ns2:id>
                <ns2:email>token@gmail.com</ns2:email>
                <ns2:password>6B86B273FF34FCE19D6B804EFF5A3F5747ADA4EAA22F1D49C01E52DDB7875B4B</ns2:password>
                <ns2:nome>Check</ns2:nome>
                <ns2:sobrenome>Token</ns2:sobrenome>
                <ns2:genero>?</ns2:genero>
                <ns2:telefone>?</ns2:telefone>
                <ns2:foto>undefined</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>202</ns2:id>
                <ns2:email>teste@email.com</ns2:email>
                <ns2:password>03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4</ns2:password>
                <ns2:nome>Teste</ns2:nome>
                <ns2:sobrenome>sobreTeste</ns2:sobrenome>
                <ns2:genero>null</ns2:genero>
                <ns2:telefone>null</ns2:telefone>
                <ns2:foto>public/avatar.svg</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>203</ns2:id>
                <ns2:email>user@teste.co</ns2:email>
                <ns2:password>04F8996DA763B7A969B1028EE3007569EAF3A635486DDAB211D512C85B9DF8FB</ns2:password>
                <ns2:nome>User</ns2:nome>
                <ns2:sobrenome>Teste</ns2:sobrenome>
                <ns2:genero>null</ns2:genero>
                <ns2:telefone>null</ns2:telefone>
                <ns2:foto>public/avatar.svg</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>204</ns2:id>
                <ns2:email>user1@teste.co</ns2:email>
                <ns2:password>04F8996DA763B7A969B1028EE3007569EAF3A635486DDAB211D512C85B9DF8FB</ns2:password>
                <ns2:nome>User1</ns2:nome>
                <ns2:sobrenome>Teste1</ns2:sobrenome>
                <ns2:genero>null</ns2:genero>
                <ns2:telefone>null</ns2:telefone>
                <ns2:foto>public/avatar.svg</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>252</ns2:id>
                <ns2:email>ff@gmail.com</ns2:email>
                <ns2:password>05A9BF223FEDF80A9D0DA5F73F5C191A665BF4A0A4A3E608F2F9E7D5FF23959C</ns2:password>
                <ns2:nome>Fridson</ns2:nome>
                <ns2:sobrenome>Firmino </ns2:sobrenome>
                <ns2:genero>?</ns2:genero>
                <ns2:telefone>?</ns2:telefone>
                <ns2:foto>undefined</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>253</ns2:id>
                <ns2:email>mj@gmail.com</ns2:email>
                <ns2:password>6B86B273FF34FCE19D6B804EFF5A3F5747ADA4EAA22F1D49C01E52DDB7875B4B</ns2:password>
                <ns2:nome>Maria</ns2:nome>
                <ns2:sobrenome>Joaquim</ns2:sobrenome>
                <ns2:genero>?</ns2:genero>
                <ns2:telefone>?</ns2:telefone>
                <ns2:foto>file:///data/user/0/com.bikeshared_/cache/rn_image_picker_lib_temp_3a20f8e3-8630-4a4e-8558-dadb26ac3b11.jpg</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>302</ns2:id>
                <ns2:email>jof@gmail.ao.co</ns2:email>
                <ns2:password>A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3</ns2:password>
                <ns2:nome>Joana</ns2:nome>
                <ns2:sobrenome>Fronteira</ns2:sobrenome>
                <ns2:genero>F</ns2:genero>
                <ns2:telefone>934664176</ns2:telefone>
                <ns2:foto/>
            </ns2:user>
            <ns2:user>
                <ns2:id>352</ns2:id>
                <ns2:email>fake@email.fk</ns2:email>
                <ns2:password>1F25ADA76F7DE2A1FE2D65DE4ECC5A74A64658BF479A370FA6159D83E9B8CB0E</ns2:password>
                <ns2:nome>User</ns2:nome>
                <ns2:sobrenome>Fake</ns2:sobrenome>
                <ns2:genero>g</ns2:genero>
                <ns2:telefone>92100000000</ns2:telefone>
                <ns2:foto>?</ns2:foto>
            </ns2:user>
            <ns2:user>
                <ns2:id>402</ns2:id>
                <ns2:email>ff@gma.com</ns2:email>
                <ns2:password>05A9BF223FEDF80A9D0DA5F73F5C191A665BF4A0A4A3E608F2F9E7D5FF23959C</ns2:password>
                <ns2:nome>Fridson </ns2:nome>
                <ns2:sobrenome>Firmino</ns2:sobrenome>
                <ns2:genero>?</ns2:genero>
                <ns2:telefone>?</ns2:telefone>
                <ns2:foto>undefined</ns2:foto>
            </ns2:user>
        </ns2:UserListResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
export const userAdmin = `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:UserResponse xmlns:ns2="http://user.soap.xml">
            <ns2:estado>true</ns2:estado>
            <ns2:mensagem>User encontrado com sucesso!</ns2:mensagem>
            <ns2:id>3</ns2:id>
            <ns2:ciclistaId>0</ns2:ciclistaId>
            <ns2:email>manuelds@outlook.pt</ns2:email>
            <ns2:password>FD83126A7B9E067B62ADF59835A50E46E9FCD934FE287B6AF33DF714F3D87750</ns2:password>
            <ns2:nome>Manuel</ns2:nome>
            <ns2:sobrenome>Santos</ns2:sobrenome>
            <ns2:genero>m</ns2:genero>
            <ns2:telefone>923146504</ns2:telefone>
            <ns2:foto/>
        </ns2:UserResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

export const allUserRiders = `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<SOAP-ENV:Header/>
<SOAP-ENV:Body>
<ns2:CiclistaListResponse xmlns:ns2="http://user.soap.xml">
<ns2:estado>true</ns2:estado>
<ns2:mensagem>Lista de ciclista encontrada com sucesso!</ns2:mensagem>
<ns2:user>
<ns2:id>1</ns2:id>
<ns2:email>basa@gmail.ao.co</ns2:email>
<ns2:password>A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3</ns2:password>
<ns2:nome>Benvindo</ns2:nome>
<ns2:sobrenome>Alves</ns2:sobrenome>
<ns2:genero>F</ns2:genero>
<ns2:telefone>934664175</ns2:telefone>
<ns2:foto/>
<ns2:ciclistaId>152</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>0</ns2:id>
<ns2:ciclistaId>252</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>56</ns2:id>
<ns2:email>teste@gmail.com</ns2:email>
<ns2:password>03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4</ns2:password>
<ns2:nome>Terceiro</ns2:nome>
<ns2:sobrenome>Teste</ns2:sobrenome>
<ns2:genero>?</ns2:genero>
<ns2:telefone>?</ns2:telefone>
<ns2:foto>file:///data/user/0/com.bikeshared*/cache/rn_image_picker_lib_temp_4cca1290-b1b2-4e7c-bab4-3653ef314ee3.jpg</ns2:foto>
<ns2:ciclistaId>253</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>102</ns2:id>
<ns2:email>m@gmail.com</ns2:email>
<ns2:password>A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3</ns2:password>
<ns2:nome>Teste</ns2:nome>
<ns2:sobrenome>Milenar</ns2:sobrenome>
<ns2:genero>?</ns2:genero>
<ns2:telefone>?</ns2:telefone>
<ns2:foto>undefined</ns2:foto>
<ns2:ciclistaId>302</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>152</ns2:id>
<ns2:email>token@gmail.com</ns2:email>
<ns2:password>6B86B273FF34FCE19D6B804EFF5A3F5747ADA4EAA22F1D49C01E52DDB7875B4B</ns2:password>
<ns2:nome>Check</ns2:nome>
<ns2:sobrenome>Token</ns2:sobrenome>
<ns2:genero>?</ns2:genero>
<ns2:telefone>?</ns2:telefone>
<ns2:foto>undefined</ns2:foto>
<ns2:ciclistaId>352</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>252</ns2:id>
<ns2:email>ff@gmail.com</ns2:email>
<ns2:password>05A9BF223FEDF80A9D0DA5F73F5C191A665BF4A0A4A3E608F2F9E7D5FF23959C</ns2:password>
<ns2:nome>Fridson</ns2:nome>
<ns2:sobrenome>Firmino </ns2:sobrenome>
<ns2:genero>?</ns2:genero>
<ns2:telefone>?</ns2:telefone>
<ns2:foto>undefined</ns2:foto>
<ns2:ciclistaId>402</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>253</ns2:id>
<ns2:email>mj@gmail.com</ns2:email>
<ns2:password>6B86B273FF34FCE19D6B804EFF5A3F5747ADA4EAA22F1D49C01E52DDB7875B4B</ns2:password>
<ns2:nome>Maria</ns2:nome>
<ns2:sobrenome>Joaquim</ns2:sobrenome>
<ns2:genero>?</ns2:genero>
<ns2:telefone>?</ns2:telefone>
<ns2:foto>file:///data/user/0/com.bikeshared*/cache/rn_image_picker_lib_temp_3a20f8e3-8630-4a4e-8558-dadb26ac3b11.jpg</ns2:foto>
<ns2:ciclistaId>403</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>302</ns2:id>
<ns2:email>jof@gmail.ao.co</ns2:email>
<ns2:password>A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3</ns2:password>
<ns2:nome>Joana</ns2:nome>
<ns2:sobrenome>Fronteira</ns2:sobrenome>
<ns2:genero>F</ns2:genero>
<ns2:telefone>934664176</ns2:telefone>
<ns2:foto/>
<ns2:ciclistaId>452</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
<ns2:user>
<ns2:id>402</ns2:id>
<ns2:email>ff@gma.com</ns2:email>
<ns2:password>05A9BF223FEDF80A9D0DA5F73F5C191A665BF4A0A4A3E608F2F9E7D5FF23959C</ns2:password>
<ns2:nome>Fridson </ns2:nome>
<ns2:sobrenome>Firmino</ns2:sobrenome>
<ns2:genero>?</ns2:genero>
<ns2:telefone>?</ns2:telefone>
<ns2:foto>undefined</ns2:foto>
<ns2:ciclistaId>502</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>0</ns2:points>
</ns2:user>
</ns2:CiclistaListResponse>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

export const userRider = `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<SOAP-ENV:Header/>
<SOAP-ENV:Body>
<ns2:CiclistaResponse xmlns:ns2="http://user.soap.xml">
<ns2:estado>true</ns2:estado>
<ns2:mensagem>User encontrado com sucesso!</ns2:mensagem>
<ns2:id>252</ns2:id>
<ns2:email>ff@gmail.com</ns2:email>
<ns2:password>05A9BF223FEDF80A9D0DA5F73F5C191A665BF4A0A4A3E608F2F9E7D5FF23959C</ns2:password>
<ns2:nome>Fridson</ns2:nome>
<ns2:sobrenome>Firmino </ns2:sobrenome>
<ns2:genero>?</ns2:genero>
<ns2:telefone>?</ns2:telefone>
<ns2:foto>undefined</ns2:foto>
<ns2:ciclistaId>402</ns2:ciclistaId>
<ns2:state>1</ns2:state>
<ns2:points>100</ns2:points>
</ns2:CiclistaResponse>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`