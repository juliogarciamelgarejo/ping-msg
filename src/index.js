import 'dotenv/config'
import express from 'express';
import path from 'node:path';
import SocketIo from './socket/server.js';
import { fileURLToPath } from 'node:url';

//! ===== Settings =====

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;
const CHATROOM_ID = '31191079';

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//! Routes

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/chatroom/:id', (req,res) => {

    const id = req.params.id;

    if (id === 'bac09734-dc57-4b11-9e54-0bd02de9f143'){
        
        return res.render('chatroom', {
            chatroomId: '31501707',
            username: "chaleselcrackk",
            privateKey: '132-key'
        })
    }

    res.status(404).send("Chatroom not found");
    
})

app.get('/widget/message/:id', (req,res) => {

    const id = req.params.id;

    if (id === 'bac09734-dc57-4b11-9e54-0bd02de9f143'){
    
        return res.render('widget', {
            privateKey: '132-key'
        })
    }


    res.status(404).send("Widget not found");

})

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})

SocketIo(server)
