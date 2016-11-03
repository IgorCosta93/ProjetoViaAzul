# ProjetoViaAzul

1. criar pasta ```npm install express```

2. criar arquivo server.js

3. criar pasta public

4. criar arquivo index.html


node server para executar o servidor na porta 3000


## Banco MongoDB

Deixar um shell para Node Server
```node server```

Abrir outro Shell para iniciar o mongod

	cd c:\mongodb\bin
	mongod

Abrir outro shell em caso de se inserir os dados por linha de comando

	use contactlist
	db.contactlist.insert({name: '.....', email: '....', number: '.....'})
	db.contactlist.find()
	db.contactlist.find().pretty()

Instalar Body

	npm install body-parser
