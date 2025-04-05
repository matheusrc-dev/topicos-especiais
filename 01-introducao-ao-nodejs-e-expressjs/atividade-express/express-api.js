const express = require('express');
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Lista de usuários fictícios
let usuarios = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com' },
    { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com' }
];

// GET /usuarios - Retorna lista de usuários
app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});

// POST /usuarios - Cria novo usuário
app.post('/usuarios', (req, res) => {
    if (!req.body.nome || !req.body.email) {
        return res.status(400).json({ mensagem: 'Nome e email são obrigatórios' });
    }
    
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// PUT /usuarios/:id - Atualiza usuário existente
app.put('/usuarios/:id', (req, res) => {
    if (!req.body.nome || !req.body.email) {
        return res.status(400).json({ mensagem: 'Nome e email são obrigatórios' });
    }

    const id = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    
    if (usuarioIndex === -1) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    usuarios[usuarioIndex] = {
        ...usuarios[usuarioIndex],
        nome: req.body.nome,
        email: req.body.email
    };

    res.status(200).json(usuarios[usuarioIndex]);
});

// DELETE /usuarios/:id - Remove usuário
app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    
    if (usuarioIndex === -1) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    usuarios.splice(usuarioIndex, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});