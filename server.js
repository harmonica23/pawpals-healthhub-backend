// DEPENDENCIES
require('dotenv').config();
require('./config/db.connection.js');

const path = require('path');
const express = require('express');
const { Storage } = require('@google-cloud/storage');
const Multer = require('multer');
const cors = require('cors');
const morgan = require('morgan');
const dietRouter = require('./routes/diet');
const incidentRouter = require('./routes/incident');
const medRouter = require('./routes/med');
const petRouter = require('./routes/pet');
const userRouter = require('./routes/user');
const vaxRouter = require('./routes/vax');
const vetConsultRouter = require('./routes/vetConsult');
const AuthRouter = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const storage = new Storage({
    projectId: 'pawpals-health-hub', // GCP project ID
    keyFilename: './my-key-file.json', // Path to service account key file
});

const bucket = storage.bucket('my-animals-bucket8'); // GCS bucket name

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB file size limit
    },
});

app.post('/upload', multer.single('image'), (req, res, next) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const gcsFileName = Date.now() + '-' + req.file.originalname;
    const file = bucket.file(gcsFileName);

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype,
        },
        resumable: false,
    });

    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        return next(err);
    });

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsFileName;
        file.makePublic().then(() => {
            req.file.cloudStoragePublicUrl = `https://storage.googleapis.com/my-animals-bucket8/${gcsFileName}`;
            res.status(200).json({ imageUrl: req.file.cloudStoragePublicUrl });
        });
    });

    stream.end(req.file.buffer);
});

app.use('/uploads', express.static('uploads'));

app.use('/diet', dietRouter);
app.use('/incident', incidentRouter);
app.use('/med', medRouter);
app.use('/pet', petRouter);
app.use('/user', userRouter);
app.use('/vax', vaxRouter);
app.use('/vetConsult', vetConsultRouter);
app.use('/auth', AuthRouter);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
