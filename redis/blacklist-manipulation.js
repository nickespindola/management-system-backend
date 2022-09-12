import cache from "./blacklist.js"
import jwt from "jsonwebtoken"
import { createHash } from 'crypto'

function tokenHashGenerator(token) {
    return createHash('sha256').update(token).digest("hex")
}

async function addTokenToBlacklist(token) {
    const tokenHash = tokenHashGenerator(token)
    const tokenExpirationTime = jwt.decode(token).exp
    await blacklist.set(tokenHash, '')
    await blacklist.expireAt(tokenHash, tokenExpirationTime)
}

async function verifyIfTokenExistsInBlacklist(token) {
    const tokenHash = tokenHashGenerator(token)
    const result = await cache.exists(tokenHash)
    if(!result) {
        return false
    } else {
        return true
    }
}

const blacklistManipulation = {
    addTokenToBlacklist,
    verifyIfTokenExistsInBlacklist
}

export default blacklistManipulation