import { SSSA } from './lib/sssa.js';
/**@param {string} secret - plain text to be privately and securely stored
 * @param {number} numShares - number of shares you want to "split" the secret into
 * @param {number} threshold - minimum number of shares needed to reconstruct the secret
 */
export default SSSA;
