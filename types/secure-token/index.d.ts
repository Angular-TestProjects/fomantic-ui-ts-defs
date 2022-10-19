// Type definitions for secure-token 1.1
// Project: https://github.com/emilbayes/secure-token
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Create a new token from your OS Cryptographically Secure Pseudorandom Number Generator (CSPRNG),
 * making the token unpredictable.
 *
 * @param size Defaults to 18, giving a security level of more than 128 bits, while avoiding any
 * padding when Base 64 encoded.
 *
 * @example
 * import * as secureToken from 'secure-token'
 * import { Request, Response } from 'express'
 *
 * const db = new Map<Buffer, boolean>() // Use map as database for simplicity
 *
 * function login (req: Request, res: Response) {
 *   // Do authentication
 *   // ...
 *   // If success issue a session token
 *   const sessionToken = secureToken.create()
 *
 *   // Here we use the 'session'
 *   db.set(secureToken.hash(sessionToken, 'session'), true)
 *
 *   res.writeHead(204, {
 *     'Set-Cookie': [
 *       `sessionToken=${sessionToken.toString('base64')}`,
 *       'HttpOnly',
 *       'Secure'
 *     ].join(';')
 *   })
 *   res.end()
 * }
 *
 * function secretPage (req: Request & { sessionToken: string }, res: Response) {
 *   // Get req.sessionToken somehow
 *   const sessionToken = Buffer.from(req.sessionToken, 'base64')
 *
 *   const hash = secureToken.hash(sessionToken, 'session')
 *
 *   if (!db.get(hash)) {
 *     res.writeHead(400)
 *     return res.end()
 *   }
 *
 *   res.writeHead(200)
 *   return res.end('Yay!')
 * }
 */
export function create(
    /** @default 18 */
    size?: number,
): Buffer;

/**
 * Hash a token for long-term storage.
 *
 * The reason it is important to obscure the token is that it is password equivalent, meaning having
 * access to a valid token is the same as having gone through an authentication process, eg. typing a
 * password. You do not want anyone with access to your tokens to be able to impersonate a user.
 *
 * Using the default token size it should take well over 2^64 guesses to find two tokens that yield the
 * same hash value due to the birthday paradox.
 *
 * @param tokenBuffer The token to hash. Should be a token generated by `create()`.
 * @param namespace You can use namespace to partition your tokens for different use-cases, invalidating
 * tokens which are used for the wrong purpose, while keeping the information hidden in storage. Doesn't
 * add any significant security and is simply so that different tokens are not used in the wrong context.
 */
export function hash(tokenBuffer: Buffer, namespace?: string | Buffer): Buffer;

export const APPTOKEN_BYTES_MIN: 16;
export const APPTOKEN_BYTES: 18;
