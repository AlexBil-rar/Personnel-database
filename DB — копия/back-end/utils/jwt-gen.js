import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, 'jwt-secret-key', {
        expiresIn: '24h'
    });
};

export default generateToken;